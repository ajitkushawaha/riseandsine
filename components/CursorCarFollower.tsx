"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useAnimationFrame } from "framer-motion";

export const CursorCarFollower = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState(0);
  const rotationRef = useRef(0);
  const [hasCompletedFirstRide, setHasCompletedFirstRide] = useState(false);

  // Mouse position target values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Super slow, smooth car chasing momentum
  const springConfig = { damping: 40, stiffness: 12, mass: 2 };
  const carX = useSpring(mouseX, springConfig);
  const carY = useSpring(mouseY, springConfig);

  // Refs to preserve coordinate histories inside the requestAnimationFrame loop
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);

  // Steer rotation logic based on the car's actual velocity / path
  useAnimationFrame(() => {
    const currentX = carX.get();
    const currentY = carY.get();

    const dx = currentX - lastXRef.current;
    const dy = currentY - lastYRef.current;

    const speed = Math.sqrt(dx * dx + dy * dy);
    // Steering rotation angle is updated as the car moves, using lerping for a smooth turning radius
    if (speed > 0.05) {
      const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);
      const diff = targetAngle - rotationRef.current;
      const normalizedDiff = Math.atan2(Math.sin(diff * Math.PI / 180), Math.cos(diff * Math.PI / 180)) * (180 / Math.PI);
      
      const nextRotation = rotationRef.current + normalizedDiff * 0.06; // Slow turn rate for realistic vehicle steering
      rotationRef.current = nextRotation;
      setRotation(nextRotation);
    }

    lastXRef.current = currentX;
    lastYRef.current = currentY;
  });

  useEffect(() => {
    setMounted(true);

    // 1. Locate the logo position in the Navbar on mount
    let logoX = 225; // Fallback exactly corresponding to the car within the logo
    let logoY = 35;

    const logoEl = document.getElementById("navbar-logo");
    if (logoEl) {
      const rect = logoEl.getBoundingClientRect();
      // The car graphic is on the right-hand side of the logo (approx 82% of the width) and 35% of the height
      logoX = rect.left + rect.width * 0.82;
      logoY = rect.top + rect.height * 0.35;
    }

    // Instantly park the car on the logo position
    mouseX.set(logoX);
    mouseY.set(logoY);
    carX.set(logoX);
    carY.set(logoY);
    lastXRef.current = logoX;
    lastYRef.current = logoY;
    setIsVisible(true);

    // 2. Trigger the "First Ride" to the Hero Section after a brief loading buffer
    const introTimeout = setTimeout(() => {
      const heroTargetX = window.innerWidth / 2;
      const heroTargetY = window.innerHeight * 0.45;

      mouseX.set(heroTargetX);
      mouseY.set(heroTargetY);

      // Transition to cursor-follow mode after the first ride arrives (approx 4.5s with slower spring)
      const enableFollowTimeout = setTimeout(() => {
        setHasCompletedFirstRide(true);
      }, 4500);

      return () => clearTimeout(enableFollowTimeout);
    }, 500);

    return () => clearTimeout(introTimeout);
  }, []);

  useEffect(() => {
    if (!hasCompletedFirstRide) return;

    let movementTimeout: any;

    const handleMouseMove = (e: MouseEvent) => {
      // Instantly halt the car at its current spot when cursor moves
      mouseX.set(carX.get());
      mouseY.set(carY.get());

      if (movementTimeout) clearTimeout(movementTimeout);

      // Debounce: update the target coordinates ONLY when mouse stops moving
      movementTimeout = setTimeout(() => {
        // Cursor stopped! Drive the car slowly to the stopped pointer location (like a pet dog)
        const targetX = e.clientX + 10;
        const targetY = e.clientY + 10;
        mouseX.set(targetX);
        mouseY.set(targetY);
      }, 350); // 350ms debounce
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (movementTimeout) clearTimeout(movementTimeout);
    };
  }, [hasCompletedFirstRide, mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        x: carX,
        y: carY,
        rotate: rotation,
        position: "fixed",
        top: -12, 
        left: -20,
        pointerEvents: "none",
        zIndex: 9999,
        transformOrigin: "center center",
      }}
      className={isVisible ? "hidden lg:block" : "hidden"}
    >
      {/* Sleek SVG Car (Top-down view, pointing RIGHT by default) */}
      <svg
        width="40"
        height="24"
        viewBox="0 0 40 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="headlight-glow" x1="36" y1="0" x2="90" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#facd63" stopOpacity="0.55" />
            <stop offset="25%" stopColor="#facd63" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#facd63" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Glowing Headlight Beams */}
        <polygon points="36,6.5 90,-4 90,12" fill="url(#headlight-glow)" />
        <polygon points="36,17.5 90,12 90,28" fill="url(#headlight-glow)" />

        {/* Tires */}
        <rect x="28" y="1" width="7" height="2.5" rx="1" fill="#0f172a" stroke="#caf0f8" strokeWidth="0.5" />
        <rect x="28" y="20.5" width="7" height="2.5" rx="1" fill="#0f172a" stroke="#caf0f8" strokeWidth="0.5" />
        <rect x="5" y="1" width="7" height="2.5" rx="1" fill="#0f172a" stroke="#caf0f8" strokeWidth="0.5" />
        <rect x="5" y="20.5" width="7" height="2.5" rx="1" fill="#0f172a" stroke="#caf0f8" strokeWidth="0.5" />

        {/* Chassis / Car Body (Cyan Blue matching logo car body) */}
        <path
          d="M3 8C3 5.23858 5.23858 3 8 3H30C33.866 3 37 6.13401 37 10V14C37 17.866 33.866 21 30 21H8C5.23858 21 3 18.7614 3 16V8Z"
          fill="#4ec5f1"
          stroke="#0f172a"
          strokeWidth="1.5"
        />

        {/* Windshield (Light blue matching logo windows) */}
        <path
          d="M24 6C24 6 26 7 27 10C28 13 28 11 27 14C26 17 24 18 24 18H21V6H24Z"
          fill="#caf0f8"
          stroke="#0f172a"
          strokeWidth="1"
        />

        {/* Roof cabin (Medium blue contrast) */}
        <rect x="13" y="6" width="9" height="12" rx="2" fill="#21a0d2" stroke="#0f172a" strokeWidth="1" />

        {/* Rear Window (Light blue) */}
        <path
          d="M11 6H13V18H11C10.5 18 10 16 10 12C10 8 10.5 6 11 6Z"
          fill="#caf0f8"
          stroke="#0f172a"
          strokeWidth="1"
        />

        {/* Headlights (Glowing yellow circles matching the logo ribbon) */}
        <circle cx="36" cy="6.5" r="1.2" fill="#ffffff" />
        <circle cx="36" cy="6.5" r="2.2" fill="#facd63" fillOpacity="0.6" />
        
        <circle cx="36" cy="17.5" r="1.2" fill="#ffffff" />
        <circle cx="36" cy="17.5" r="2.2" fill="#facd63" fillOpacity="0.6" />
      </svg>
    </motion.div>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Car } from "lucide-react";
import { SectionEyebrow } from "@/components/global";
import Image from "next/image";

export const About = () => {
  const services = [
    "Basic Driving Skills",
    "Parellel Parking",
    "Road Test Preparation",
    "Highway and City Driving",
    "Road Test Vehicle Usage",
    "1:1 Lessons",
  ];

  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <SectionEyebrow>About Driving School</SectionEyebrow>
            <h2 className="mt-8 font-headline text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-3xl">
              Ready for safe, fun <br className="hidden sm:block" />
              <span className="text-accent">driving experience?</span>
            </h2>
          </div>

          <p className="mt-8 text-lg text-white/50 leading-relaxed max-w-4xl mx-auto text-center lg:mx-0 lg:text-left sm:text-xl">
            Rise n Shine Driving School offers full spectrum training in Kelowna that goes well beyond fundamental rules and traffic regulations. The comprehensive services we offer include:
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-x-12 sm:gap-y-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
            {services.map((service) => (
              <div key={service} className="flex items-center gap-3 sm:gap-4 group">
                <div className="h-2 w-2 rounded-full bg-accent/40 group-hover:bg-accent transition-colors hidden sm:block" />
                <span className="text-sm sm:text-lg font-medium text-white/80">{service}</span>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 relative h-[400px] sm:h-[600px] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
          >
            <Image 
                src="/about_team.jpg" 
                alt="Rise n Shine Driving School Car and Team in Kelowna" 
                fill
                className="object-cover transition-transform duration-1000" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

"use client";

import React from "react";
import { Navbar, Footer, MobileDock } from "@/components/global";

import dynamic from "next/dynamic";

// Sections - Lazy load lower ones to reduce initial bundle
const Hero = dynamic(() => import("@/components/sections/Hero"));
const News = dynamic(() => import("@/components/sections/News"));
const About = dynamic(() => import("@/components/sections/About"));
const Instructor = dynamic(() => import("@/components/sections/Instructor"));
const SuccessWall = dynamic(() => import("@/components/sections/SuccessWall"), { ssr: false });
const Pillars = dynamic(() => import("@/components/sections/Pillars"), { ssr: false });
const Programs = dynamic(() => import("@/components/sections/Programs"));
const Journey = dynamic(() => import("@/components/sections/Journey"), { ssr: false });
const Gallery = dynamic(() => import("@/components/sections/Gallery"), { ssr: false });
const Proof = dynamic(() => import("@/components/sections/Proof"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false });
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });

export default function Home() {
  return (
    <div className="bg-ink font-sans selection:bg-accent/30 selection:text-ink">
      <Navbar />
      <main>
        <Hero />
        <News />
        <About />
        <Instructor />
        <SuccessWall />
        <Pillars />
        <Programs />
        <Journey />
        <Gallery />
        <Proof />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileDock />
    </div>
  );
}

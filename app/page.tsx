import React from "react";
import { Navbar, Footer, MobileDock } from "@/components/global";

import dynamic from "next/dynamic";

// Sections - Using dynamic imports for code-splitting but with SSR enabled for performance
const Hero = dynamic(() => import("@/components/sections/Hero"));
const News = dynamic(() => import("@/components/sections/News"));
const About = dynamic(() => import("@/components/sections/About"));
const Instructor = dynamic(() => import("@/components/sections/Instructor"));
const SuccessWall = dynamic(() => import("@/components/sections/SuccessWall"));
const Pillars = dynamic(() => import("@/components/sections/Pillars"));
const Programs = dynamic(() => import("@/components/sections/Programs"));
const Journey = dynamic(() => import("@/components/sections/Journey"));
const Gallery = dynamic(() => import("@/components/sections/Gallery"));
const Proof = dynamic(() => import("@/components/sections/Proof"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

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

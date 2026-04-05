import React from "react";
import { Navbar, Footer, MobileDock } from "@/components/global";

// Sections
import Hero from "@/components/sections/Hero";
import News from "@/components/sections/News";
import About from "@/components/sections/About";
import Instructor from "@/components/sections/Instructor";
import SuccessWall from "@/components/sections/SuccessWall";
import Pillars from "@/components/sections/Pillars";
import Programs from "@/components/sections/Programs";
import Journey from "@/components/sections/Journey";
import Gallery from "@/components/sections/Gallery";
import Proof from "@/components/sections/Proof";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

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

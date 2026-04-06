"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SectionEyebrow } from "@/components/global";
import Image from "next/image";

export const Hero = () => {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden border-b border-white/8 pt-10">
      <div className="absolute inset-0">
        <Image
          src="/hero_bg.png"
          alt="Modern car driving through the city at dusk - Rise n Shine Kelowna"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,190,92,0.22),transparent_35%),linear-gradient(180deg,rgba(6,10,18,0.2),rgba(6,10,18,0.84)_55%,rgba(6,10,18,1))]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-12 pt-24">
        <motion.div
           initial={{ opacity: 0, y: 36 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="max-w-4xl"
        >
          <SectionEyebrow>Kelowna based expert training</SectionEyebrow>
          <h1 className="mt-8 max-w-4xl font-headline text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-[7.2rem] lg:leading-[0.92]">
            Learn to drive
            <span className="block text-white/55">without the panic.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:mt-8 sm:text-xl sm:leading-8">
            A cinematic, confidence-first driving school experience for beginners who want calm coaching,
            structured practice, and real control on city roads in BC.
          </p>
 
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#contact" className="button-primary w-full justify-center sm:w-auto transition-all">
              Start your trial
              <ArrowRight size={18} />
            </a>
            <a href="#journey" className="button-secondary w-full justify-center sm:w-auto transition-all">
              Explore the journey
            </a>
          </div>
        </motion.div>
 
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 gap-4 border-t border-white/12 pt-8 sm:grid-cols-3"
        >
           <div className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
              <p className="text-2xl font-semibold text-white tracking-tighter sm:text-3xl">$360</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/48 sm:text-sm">3 lessons + car special</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
              <p className="text-2xl font-semibold text-white tracking-tighter sm:text-3xl">10+</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/48 sm:text-sm">years of experience</p>
            </div>
            <div className="col-span-2 sm:col-span-1 rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
              <p className="text-2xl font-semibold text-white tracking-tighter sm:text-3xl">8am-8pm</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/48 sm:text-sm">operating hours</p>
            </div>
        </motion.div>

        <div className="mt-10 flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-white/45 animate-bounce">
          <ChevronDown size={16} />
          Scroll to discover the method
        </div>
      </div>
    </section>
  );
};

export default Hero;

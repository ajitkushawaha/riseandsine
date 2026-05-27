"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, CheckCircle2, Car, Award } from "lucide-react";
import { SectionEyebrow } from "@/components/global";
import Image from "next/image";

export const Hero = () => {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden pt-20 pb-12 bg-white-pure">
      {/* Soft warm radial gradient background glow */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent to-amber-200 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-between px-6 pb-6 pt-16">
        {/* Split Screen Layout */}
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center w-full my-auto">
          {/* Left Column (Content) */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 max-w-2xl"
          >
            <SectionEyebrow className="!text-slate-800 !border-accent/20 !bg-accent/5">
              Kelowna based expert training
            </SectionEyebrow>

            <h1 className="mt-8 font-headline text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-[5.5rem] lg:leading-[0.95]">
              Learn to drive <br />
              <span className="bg-gradient-to-r from-accent via-amber-500 to-amber-600 bg-clip-text text-transparent">without the panic.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl sm:leading-8">
              A cinematic, confidence-first driving school experience for beginners who want calm coaching,
              structured practice, and real control on city roads in BC.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#contact" className="button-primary w-full justify-center sm:w-auto transition-all text-center">
                Start your trial
                <ArrowRight size={18} />
              </a>
              <a href="#journey" className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white-pure px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-800 hover:-translate-y-0.5 hover:bg-slate-50 transition-all w-full sm:w-auto shadow-sm">
                Explore the journey
              </a>
            </div>

            {/* Google reviews trust banner */}
            <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-8">
              <div className="flex -space-x-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white-pure">
                  <Image src="/gallery/IMG_8144-scaled-e1642396804704.jpg" alt="Learner Alex" fill className="object-cover" />
                </div>
                <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white-pure">
                  <Image src="/gallery/IMG_8151_2-scaled-e1642397646610.jpg" alt="Learner Paige" fill className="object-cover" />
                </div>
                <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white-pure">
                  <Image src="/gallery/IMG_8273-scaled-e1642398023397.jpg" alt="Learner Gurpreet" fill className="object-cover" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-slate-900 mr-1">5.0 / 5.0</span>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-1">Trusted by 720+ licensed drivers in Kelowna</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Visual with floating cards) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 relative flex justify-center mt-12 lg:mt-0"
          >
            {/* Background Glow */}
            <div className="absolute -inset-4 rounded-[3.5rem] bg-linear-to-tr from-accent/20 to-amber-200/10 blur-2xl opacity-70" />

            {/* Main Visual */}
            <div className="relative w-full max-w-full h-[60vh] rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl bg-slate-50 z-0">
              <Image
                src="/gimages/resized-image-Promo-scaled.jpeg"
                alt="Rise n Shine Driving School dual-control safety vehicle in Kelowna"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-w-768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Floating Card 1 - ICBC Prep */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-12 rounded-2xl border border-white-pure/60 bg-white-pure/80 p-4 shadow-xl backdrop-blur-md flex items-center gap-3 z-10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-slate-800">
                <CheckCircle2 size={20} className="text-accent-red" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">ICBC Prep</p>
                <p className="text-xs font-semibold text-slate-800">Route Specialists</p>
              </div>
            </motion.div>

            {/* Floating Card 2 - Safety First */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-8 bottom-12 rounded-2xl border border-white-pure/60 bg-white-pure/80 p-4 shadow-xl backdrop-blur-md flex items-center gap-3 z-10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-slate-800">
                <Car size={20} className="text-accent-red" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Safety First</p>
                <p className="text-xs font-semibold text-slate-800">Dual-Control Cars</p>
              </div>
            </motion.div>

            {/* Floating Card 3 - Ratings */}
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-12 top-1/3 rounded-2xl border border-white-pure/60 bg-white-pure/80 p-4 shadow-xl backdrop-blur-md flex items-center gap-3 z-10 hidden sm:flex"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-slate-800">
                <Award size={20} className="text-accent-red" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Top Rating</p>
                <p className="text-xs font-semibold text-slate-800">98% Success Rate</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom stats and scroll indicator */}
        <div className="w-full mt-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-8 sm:grid-cols-3"
          >
            <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-5 backdrop-blur-sm">
              <p className="text-2xl font-bold text-slate-900 tracking-tighter sm:text-3xl">$90</p>
              <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Starting price</p>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-5 backdrop-blur-sm">
              <p className="text-2xl font-bold text-slate-900 tracking-tighter sm:text-3xl">10+</p>
              <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">years of experience</p>
            </div>
            <div className="col-span-2 sm:col-span-1 rounded-3xl border border-slate-100 bg-slate-50/50 p-5 backdrop-blur-sm">
              <p className="text-2xl font-bold text-slate-900 tracking-tighter sm:text-3xl">8am-8pm</p>
              <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">operating hours</p>
            </div>
          </motion.div>

          <div className="mt-8 flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-slate-400 animate-bounce">
            <ChevronDown size={16} />
            Scroll to discover the method
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Testimonials from "./Testimonials";

export const Instructor = () => {
  return (
    <section id="team" className="section-shell bg-ink-soft text-center lg:text-left">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-5 mb-14">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5">
            <Users size={36} className="text-white" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-xl font-medium text-accent">Driving School Team</p>
            <h2 className="mt-2 font-headline text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Qualified Instructor
            </h2>
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="panel-card overflow-hidden p-0!"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-[400px]">
              <Image 
                src="/instructor.jpeg" 
                alt="Satpal Hans - Head Instructor at Rise n Shine Kelowna"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink to-transparent lg:hidden" />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-16">
              <div className="flex items-center gap-2 text-accent justify-center lg:justify-start">
                <ShieldCheck size={20} />
                <span className="text-sm font-bold uppercase tracking-widest text-accent">Certified Specialist</span>
              </div>
              <h3 className="mt-6 font-headline text-4xl font-bold text-white">
                Satpal Hans
              </h3>
              <p className="mt-2 text-xl font-bold text-white/40 uppercase tracking-[0.2em]">Owner / Head Instructor</p>
              
              <div className="mt-8 relative">
                 <p className="text-xl italic text-white/70 leading-relaxed relative z-10">
                   "I am Satpal Kaur Hans – owner and head instructor at Rise n Shine Driving School. I have 20 years on the road professional driving experience and Class – 4 Instructor driving licence. I have always enjoyed driving and teaching people to drive safely gives me a sense of satisfaction."
                 </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                 <div className="flex items-center gap-3 rounded-full border border-white/5 bg-white/5 px-5 py-3">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span className="text-sm font-bold text-white/80">Class-4 Licensed</span>
                 </div>
                 <div className="flex items-center gap-3 rounded-full border border-white/5 bg-white/5 px-5 py-3">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span className="text-sm font-bold text-white/80">BC Certified</span>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Testimonials />
    </section>
  );
};

export default Instructor;

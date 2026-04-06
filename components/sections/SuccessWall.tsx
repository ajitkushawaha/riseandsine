"use client";

import React from "react";
import { motion } from "framer-motion";
import { successStories } from "@/lib/data";
import { SectionEyebrow } from "@/components/global";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export const SuccessWall = () => {
  return (
    <section id="social-proof" className="section-shell bg-ink overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center lg:text-left">
          <SectionEyebrow>The Wall of Success</SectionEyebrow>
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl font-headline text-5xl font-bold text-white sm:text-7xl">
              Real Students. <br />
              <span className="text-accent border-b-4 border-white/10 pb-2">Real Passes.</span>
            </h2>
            <div className="flex flex-col gap-4 items-center lg:items-end">
              <div className="flex -space-x-4">
                  {successStories.slice(0, 5).map((item, i) => (
                      <div key={i} className="h-12 w-12 rounded-full border-2 border-ink overflow-hidden relative">
                          <Image src={item.src} className="object-cover" fill alt="Successful student driver - Rise n Shine Kelowna" />
                      </div>
                  ))}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-accent text-[10px] font-bold text-slate-950">
                      +700
                  </div>
              </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                Join the Kelowna success community
            </p>
          </div>
        </div>
      </div>

      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [column-fill:balance]">
        {successStories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: (index % 5) * 0.1 }}
            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl border border-white/5 bg-white/5"
          >
            <div className="relative w-full aspect-square sm:aspect-auto">
                <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={400}
                    className="w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    loading="lazy"
                />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-center gap-2 rounded-full bg-accent px-3 py-1 shadow-2xl">
                    <CheckCircle size={12} className="text-slate-950" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-950">Passed</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
            <div className="rounded-[3rem] border border-white/10 bg-white/5 px-10 py-12 text-center backdrop-blur-xl max-w-2xl">
                <p className="text-lg text-white/60 leading-relaxed mb-8">
                    These are just a few of the hundreds of students who have gained their independence and confidence on the road with Rise n Shine.
                </p>
                <a href="#contact" className="button-primary">
                    Start your success story
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessWall;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { programs } from "@/lib/data";
import { SectionEyebrow } from "@/components/global";

export const Programs = () => {
  return (
    <section id="services" className="section-shell">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionEyebrow>Programs</SectionEyebrow>
            <h2 className="mt-8 max-w-3xl font-headline text-4xl font-semibold text-white sm:text-5xl">
              Confidently built training packages.
            </h2>
          </div>
          <p className="max-w-xl text-white/62">
            Pricing is crystal clear. Each package is designed around specific learning goals, ensuring you only pay for the time you need.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="program-card group"
            >
              {index === 1 && (
                <div className="absolute top-0 right-0 rounded-bl-3xl bg-accent px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-950">
                  Best Value
                </div>
              )}
              
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="mt-4 font-headline text-3xl font-bold text-white group-hover:text-accent transition-colors">{program.title}</h3>
                  </div>
                </div>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white leading-none tracking-tight">{program.price}</span>
                </div>

                <p className="mt-8 text-accent leading-relaxed font-bold uppercase text-[10px] tracking-widest">{program.duration}</p>
                <p className="mt-2 text-white/40 leading-relaxed text-sm">{program.summary}</p>

                <ul className="mt-10 space-y-4">
                  {program.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-white/72 text-sm">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10">
                        <CheckCircle2 size={12} className="text-accent" />
                      </div>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <a href="#contact" className="inline-flex w-full items-center justify-between rounded-2xl bg-white/5 px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all group-hover:bg-accent group-hover:text-slate-950 shadow-xl">
                    Enquire now
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;

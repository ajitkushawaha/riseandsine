"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionEyebrow } from "@/components/global";
import Image from "next/image";

export const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="reviews" className="relative pt-12 ">
      <div className="mx-auto max-w-7xl ">
        <div className="mb-12 text-center lg:text-left">
          <SectionEyebrow>Student voices</SectionEyebrow>
          <h2 className="mt-8 font-headline text-5xl font-bold text-white tracking-tight sm:text-6xl">
            Real Stories. <span className="text-white/30">Verified Wins.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 lg:grid-cols-6 xl:grid-cols-8">
          {testimonials.map((student, index) => (
            <div 
                key={student.name} 
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
            >
              {/* Individual Floating Tooltip - RESTORED & EDGE-AWARE */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`pointer-events-none absolute bottom-full z-50 mb-6 w-[calc(100vw-3rem)] sm:w-80 md:w-96 
                      ${index % 2 === 0 ? 'left-0 sm:left-1/2 sm:-translate-x-1/2' : 'right-0 sm:left-1/2 sm:-translate-x-1/2'}
                      ${index % 4 === 0 ? 'md:left-0 md:translate-x-0' : index % 4 === 3 ? 'md:right-0 md:translate-x-0' : ''}
                      ${index % 8 === 0 ? 'xl:left-0 xl:translate-x-0' : index % 8 === 7 ? 'xl:right-0 xl:translate-x-0' : ''}
                    `}
                  >
                    <div className="rounded-4xl border border-white/20 bg-slate-950/95 p-6 sm:p-8 shadow-2xl backdrop-blur-3xl ring-1 ring-white/10">
                      <div className="mb-3 flex gap-1 text-accent">
                        {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                      </div>
                      <p className="text-base sm:text-lg leading-relaxed text-white font-medium">
                        "{student.quote}"
                      </p>
                      <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                            <CheckCircle2 size={16} className="text-accent" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-white uppercase tracking-wider">{student.name}</p>
                            <p className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none mt-1">{student.role}</p>
                        </div>
                      </div>
                    </div>
                    {/* Tail/Arrow for the tooltip */}
                    <div className={`absolute top-full -mt-0.5 h-3 w-3 rotate-45 border-b border-r border-white/20 bg-slate-950/95 shadow-2xl
                      ${index % 2 === 0 ? 'left-8 sm:left-1/2 sm:-translate-x-1/2' : 'right-8 sm:left-1/2 sm:-translate-x-1/2'}
                    `} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Avatar Grid Item */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
                className="group relative cursor-pointer"
              >
                <div className={`relative aspect-square overflow-hidden rounded-3xl border-2 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(245,190,92,0.3)] ${
                  hoveredIndex === index ? 'border-accent shadow-[0_0_30px_rgba(245,190,92,0.3)]' : 'border-white/5 group-hover:border-accent/40'
                }`}>
                  <div className={`relative h-full w-full transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 ${
                      hoveredIndex === index ? 'grayscale-0 scale-110' : 'grayscale'
                  }`}>
                    <Image 
                      src={student.image} 
                      alt={student.alt} 
                      fill
                      className="object-cover" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/20">
                Hover or tap to hear their experience
            </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

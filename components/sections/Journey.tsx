"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/global";

const steps = [
  {
    number: "01",
    title: "Consultation",
    text: "We discuss your driving history and goals to recommend the right package for your experience level.",
  },
  {
    number: "02",
    title: "1:1 Practical training",
    text: "Each 90-minute session focuses on specific skills, from basic controls to complex city intersections.",
  },
  {
    number: "03",
    title: "Defensive Mastery",
    text: "Learn to anticipate hazards, manage skids, and drive with awareness in various traffic conditions.",
  },
  {
    number: "04",
    title: "Road Test Success",
    text: "Use our vehicle for the test and benefit from our guidance through the ICBC booking process.",
  },
];

export const Journey = () => {
  return (
    <section id="journey" className="section-shell">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <SectionEyebrow>Journey</SectionEyebrow>
          <h2 className="mt-8 font-headline text-4xl font-semibold text-white sm:text-5xl">
            Success is a step-by-step process.
          </h2>
          <p className="mt-8 max-w-lg text-white/62">
            Every driver starts somewhere. We break down the complex mechanics of driving into simple, manageable milestones.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="timeline-card"
            >
              <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-accent/80">{step.number}</p>
                  <h3 className="mt-4 font-headline text-3xl font-semibold text-white">{step.title}</h3>
                </div>
                <p className="max-w-lg text-white/62 leading-relaxed">{step.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;

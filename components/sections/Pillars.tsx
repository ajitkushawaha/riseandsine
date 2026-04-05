"use client";

import React from "react";
import { motion } from "framer-motion";

export const pillars = [
  {
    title: "Defensive Training Focus",
    copy: "We teach risk avoidance and skid recovery, ensuring every student knows how to keep themselves and others safer on the road.",
  },
  {
    title: "Personalized 1:1 Lessons",
    copy: "Every session is dedicated entirely to you. No distractions, just focused coaching tailored to your learning pace and confidence.",
  },
  {
    title: "Road Test Specialists",
    copy: "From booking assistance to using our dual-control car for your test, we provide everything you need to pass with flying colors.",
  },
];

export const Pillars = () => {
  return (
    <section className="section-shell pt-0">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-3">
        {pillars.map((pillar, index) => (
          <motion.article
            key={pillar.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            className="panel-card"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-accent/80">0{index + 1}</p>
            <h3 className="mt-10 font-headline text-2xl font-semibold text-white">{pillar.title}</h3>
            <p className="mt-5 max-w-sm text-white/62">{pillar.copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Pillars;

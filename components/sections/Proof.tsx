"use client";

import React from "react";
import { motion } from "framer-motion";

const proof = [
  {
    metric: "100%",
    label: "Dedicated 1:1 attention",
    detail: "No group lessons. Every minute of your training is focused entirely on your individual progress.",
  },
  {
    metric: "3 Cities",
    label: "BC Interior coverage",
    detail: "Expert instruction across Kelowna, West Kelowna, and Lake Country with local knowledge.",
  },
  {
    metric: "Dual Control",
    label: "Safe learning environment",
    detail: "All training is conducted in vehicles equipped with dual controls for your absolute safety.",
  },
];

export const Proof = () => {
  return (
    <section id="proof" className="section-shell">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {proof.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="panel-card"
            >
              <p className="text-5xl font-bold text-white mb-6 tracking-tighter">{item.metric}</p>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{item.label}</h3>
              <p className="text-white/40 leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;

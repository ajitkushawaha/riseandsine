"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, ShieldAlert, Car, CheckCircle2, AlertTriangle, DollarSign } from "lucide-react";
import { SectionEyebrow } from "@/components/global";

export const Policies = () => {
  const kelownaPricing = [
    { title: "Single Lesson", price: "$90", details: "" },
    { title: "3-Lesson Package", price: "$90 / lesson", details: "$270 total" },
    { title: "5-Lesson Package", price: "$88 / lesson", details: "$440 total" },
    { title: "10-Lesson Package", price: "$87.50 / lesson", details: "$875 total (Best Value)", popular: true },
    { title: "5-Lesson + Road Test", price: "$88/lesson + $80 Test", details: "$520 total" },
    { title: "10-Lesson + Road Test", price: "$87.50/lesson + $75 Test", details: "$950 total" }
  ];

  const generalPolicies = [
    "Each lesson is a minimum of 90 minutes with 85 minutes of practice time.",
    "Payment must be made prior to each lesson booking.",
    "Must have a valid driving license and carry it with you during all lessons.",
    "Students must use prescription glasses and wear appropriate footwear (if applicable).",
    "Maximum of 3 people (1 observing) in the vehicle during your lesson time."
  ];

  const cancellationPolicies = [
    "To cancel a driving lesson, we require 48 hours' notice (cancellation fee: $50.00).",
    "For any unforeseen circumstances, a refund may be issued for the remaining lessons minus $90 for each lesson that has taken place."
  ];

  const roadTestRates = [
    { city: "Kelowna", rate: "$90.00" },
    { city: "West Kelowna", rate: "$120.00" },
    { city: "Vernon", rate: "$160.00" },
    { city: "Penticton", rate: "$210.00" }
  ];

  return (
    <section id="policies" className="section-shell">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-12 lg:items-start lg:text-left">
          <SectionEyebrow>Rules & Guidelines</SectionEyebrow>
          <h2 className="mt-8 font-headline text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Lesson & Booking Policies.
          </h2>
          <p className="mt-8 text-lg text-white/50 leading-relaxed max-w-2xl sm:text-xl">
            Please review our driving school policies, cancellation terms, and ICBC road test vehicle rental rates before scheduling.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1: Lesson Pricing (Kelowna) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group rounded-4xl border border-line bg-white-pure p-8 transition-all hover:border-accent/40 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-slate-950 mb-6">
                <DollarSign size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Lesson Pricing (Kelowna)</h3>
              <div className="space-y-4">
                {kelownaPricing.map((item, index) => (
                  <div key={index} className="flex justify-between items-start text-sm border-b border-line pb-2">
                    <div>
                      <span className="text-white/80 font-medium">{item.title}</span>
                      {item.details && (
                        <span className="block text-xs text-white/40 mt-0.5">{item.details}</span>
                      )}
                    </div>
                    <span className={`text-slate-900 font-bold ${item.popular ? 'text-accent bg-white/10 px-2 py-0.5 rounded-lg border border-accent/20' : ''}`}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Lesson Rules & Practice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group rounded-4xl border border-line bg-white-pure p-8 transition-all hover:border-accent/40 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-slate-800 border border-accent/35 mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Lesson Rules & Practice</h3>
              <ul className="space-y-4">
                {generalPolicies.map((policy, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    <span>{policy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 3: Cancellation & Refund */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group rounded-4xl border border-line bg-white-pure p-8 transition-all hover:border-accent/40 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-red/10 text-accent-red border border-accent-red/20 mb-6">
                <ShieldAlert size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Cancellation & Refund</h3>
              <ul className="space-y-4">
                {cancellationPolicies.map((policy, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                    <AlertTriangle size={16} className="text-accent-red shrink-0 mt-0.5" />
                    <span>{policy}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 rounded-2xl bg-accent-red/5 p-4 border border-accent-red/10">
              <span className="text-[10px] font-bold text-accent-red uppercase tracking-wider block mb-1">Important</span>
              <p className="text-xs text-white/60">Please notify us at least 48 hours prior to rescheduling to avoid cancellation fees.</p>
            </div>
          </motion.div>

          {/* Card 4: Road Tests Rates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group rounded-4xl border border-line bg-white-pure p-8 transition-all hover:border-accent/40 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-slate-800 border border-accent/35 mb-6">
                <Car size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Road Test Vehicle Use</h3>
              <p className="text-sm text-white/60 mb-6">
                Road tests must be booked by students directly through ICBC. To use our training vehicle, you must complete a minimum of 1 lesson first:
              </p>
              <div className="space-y-3">
                {roadTestRates.map((item) => (
                  <div key={item.city} className="flex justify-between items-center text-sm border-b border-line pb-2">
                    <span className="text-white/80 font-medium">{item.city}</span>
                    <span className="text-slate-900 font-bold">{item.rate}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 text-xs text-white/40 leading-relaxed">
              * The instructor must be notified at the time of booking if the training vehicle is required for a pre-booked ICBC road test.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Policies;

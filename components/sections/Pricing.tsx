"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { SectionEyebrow } from "@/components/global";

const packages = [
  {
    title: "1 Lesson (90m)",
    price: "$90",
    badge: "Brush-Up",
    value: "90m Lessons - 1 Lesson",
    description: "Perfect for a quick habit correction, local route assessment, or a mock test before your exam.",
    bullets: [
      "1 full 90-minute session",
      "Defensive driving assessment",
      "Personalized instructor feedback"
    ]
  },
  {
    title: "3 Lessons (90m)",
    price: "$270",
    badge: "Habit Fixer",
    value: "90m Lessons - 3 Lessons",
    description: "Ideal for drivers who want to fix specific habits, learn reverse parking, or polish lane changes.",
    bullets: [
      "3 full 90-minute sessions",
      "Parallel & reverse stall parking",
      "Speed and lane control coaching"
    ]
  },
  {
    title: "5 Lessons (90m)",
    price: "$440",
    badge: "Popular Choice",
    value: "90m Lessons - 5 Lessons",
    description: "Great for intermediate learners targeting key test routes and building overall confidence.",
    bullets: [
      "5 full 90-minute sessions",
      "Mock road test evaluation",
      "Highway entry/exit maneuvers",
      "Scanning & hazard detection"
    ],
    popular: true
  },
  {
    title: "10 Lessons (90m)",
    price: "$875",
    badge: "Full Training",
    value: "90m Lessons - 10 Lessons",
    description: "Comprehensive training from basic controls to complete test readiness for maximum safety.",
    bullets: [
      "10 full 90-minute sessions",
      "Complete defensive driving foundation",
      "Multi-lane intersection control",
      "Winter & adverse weather prep"
    ]
  },
  {
    title: "5 Lessons + Car for Test",
    price: "$520",
    badge: "Road Test Prep",
    value: "90m Lessons - 5 + Road Test",
    description: "Our highly popular prep package that includes the school's dual-control safety car for test day.",
    bullets: [
      "5 full 90-minute sessions",
      "Pre-test warm-up lesson",
      "Dual-control car for road test",
      "Mock test scoring review"
    ],
    popular: true
  },
  {
    title: "10 Lessons + Car for Test",
    price: "$950",
    badge: "Complete Success",
    value: "90m Lessons - 10 + Road Test",
    description: "The ultimate confidence package, taking you all the way through test day with zero stress.",
    bullets: [
      "10 full 90-minute sessions",
      "Pre-test warm-up lesson",
      "Dual-control car for road test",
      "Full mock test simulation",
      "Priority scheduling support"
    ]
  }
];

export const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    program: "Select a package",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormData({ name: "", phone: "", program: "Select a package", message: "" });

      // Reset success state after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleEnquire = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      program: value,
    }));
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="pricing" className="section-shell">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionEyebrow>Pricing</SectionEyebrow>
              <h2 className="mt-8 max-w-3xl font-headline text-4xl font-semibold text-white sm:text-5xl">
                Full lesson pricing, clearly laid out.
              </h2>
            </div>
            <p className="max-w-xl text-white/62">
              All standard and road test packages are shown below so you can view our 90-minute lesson options at a glance.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <motion.article
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: index * 0.05 }}
                className="program-card group flex flex-col justify-between"
              >
                {pkg.badge && (
                  <div className={`absolute top-0 right-0 rounded-bl-3xl px-6 py-2 text-[10px] font-bold uppercase tracking-widest ${pkg.popular ? 'bg-accent text-slate-950' : 'bg-white/10 text-white/80 border-l border-b border-line'}`}>
                    {pkg.badge}
                  </div>
                )}

                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">
                      {pkg.title.includes("Car for Test") ? "Combo Package" : "Individual Lessons"}
                    </span>
                    <h3 className="mt-2 font-headline text-2xl font-bold text-white group-hover:text-accent transition-colors">
                      {pkg.title}
                    </h3>

                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-white tracking-tight">{pkg.price}</span>
                    </div>

                    <p className="mt-4 text-white/40 leading-relaxed text-sm">
                      {pkg.description}
                    </p>

                    <ul className="mt-8 space-y-4">
                      {pkg.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-3 text-white/72 text-sm">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10">
                            <CheckCircle2 size={12} className="text-accent" />
                          </div>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-line">
                    <button
                      onClick={() => handleEnquire(pkg.value)}
                      className="inline-flex w-full items-center justify-between rounded-2xl bg-white/5 px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all group-hover:bg-accent group-hover:text-slate-950 shadow-xl cursor-pointer"
                    >
                      Enquire now
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 rounded-4xl border border-accent/10 bg-accent/5 p-8 text-white/90">
            <p className="text-sm leading-7">
              Need help choosing the best package? Contact us for a personalized recommendation based on your experience level and road test timeline.
            </p>
            <div className="mt-6 text-center">
              <button
                onClick={() => handleEnquire("Custom Package")}
                className="inline-flex items-center gap-3 rounded-2xl bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-slate-950 transition-transform hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
              >
                Enquire Now
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-[2.5rem] border border-white/10 bg-slate-950 p-8 shadow-3xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-headline font-bold text-white">Get Your Quote</h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-full bg-white/5 p-2 text-white hover:bg-white/10 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Learner Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 text-white focus:border-accent focus:outline-none transition-colors placeholder:text-white/20"
                        placeholder="Full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Phone Number</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 text-white focus:border-accent focus:outline-none transition-colors placeholder:text-white/20"
                        placeholder="Contact number"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Our Programs</label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 text-white focus:border-accent focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option className="bg-ink" value="Select a package">Select a package</option>
                      <option className="bg-ink" value="90m Lessons - 1 Lesson">$90 - 90m Lesson (1)</option>
                      <option className="bg-ink" value="90m Lessons - 3 Lessons">$270 - 90m Lessons (3)</option>
                      <option className="bg-ink" value="90m Lessons - 5 Lessons">$440 - 90m Lessons (5)</option>
                      <option className="bg-ink" value="90m Lessons - 10 Lessons">$875 - 90m Lessons (10)</option>
                      <option className="bg-ink" value="90m Lessons - 5 + Road Test">$520 - 90m Lessons (5) + Road Test</option>
                      <option className="bg-ink" value="90m Lessons - 10 + Road Test">$950 - 90m Lessons (10) + Road Test</option>
                      <option className="bg-ink" value="Custom Package">Custom Package - Please specify in message</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Message</label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-white focus:border-accent focus:outline-none transition-colors placeholder:text-white/20"
                      placeholder="Tell us about your driving experience..."
                    ></textarea>
                  </div>
                  <button
                    disabled={status === "loading" || status === "success"}
                    className="button-primary w-full justify-center text-lg py-5 group transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Inquiry"}
                    {status === "success" ? (
                      <CheckCircle2 size={20} className="text-green-500" />
                    ) : (
                      <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-red-400 text-sm text-center mt-4">Failed to send message. Please try again.</p>
                  )}
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Pricing;

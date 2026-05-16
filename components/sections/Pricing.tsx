"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { SectionEyebrow } from "@/components/global";

const pricingSections = [
  {
    title: "60m Lesson Pricing",
    description: "Choose the right amount of practice time for your confidence and test goals.",
    items: [
      { label: "1 Lesson (60m)", price: "$80" },
      { label: "3 Lessons (60m)", price: "$240" },
      { label: "5 Lessons (60m)", price: "$390" },
      { label: "10 Lessons (60m)", price: "$775" },
      { label: "5 Lessons (60m) + Car for Road Test", price: "$470" },
      { label: "10 Lessons (60m) + Car for Road Test", price: "$850" }
    ]
  },
  {
    title: "90m Lesson Pricing",
    description: "Extended driving lessons for deeper skill-building and road test readiness.",
    items: [
      { label: "1 Lesson (90m)", price: "$90" },
      { label: "3 Lessons (90m)", price: "$270" },
      { label: "5 Lessons (90m)", price: "$440" },
      { label: "10 Lessons (90m)", price: "$875" },
      { label: "5 Lessons (90m) + Car for Road Test", price: "$520" },
      { label: "10 Lessons (90m) + Car for Road Test", price: "$950" }
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

  return (
    <>
      <section id="pricing" className="section-shell">
        <div className="mx-auto max-w-6xl py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionEyebrow>Pricing</SectionEyebrow>
              <h2 className="mt-8 max-w-3xl font-headline text-4xl font-semibold text-white sm:text-5xl">
                Full lesson pricing, clearly laid out.
              </h2>
            </div>
            <p className="max-w-xl text-white/62">
              All standard and road test packages are shown below so you can compare 60-minute and 90-minute lesson options at a glance.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {pricingSections.map((section) => (
              <div key={section.title} className="rounded-4xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.65)]">
                <h3 className="text-3xl font-headline font-bold text-white">{section.title}</h3>
                <p className="mt-3 text-white/60">{section.description}</p>

                <div className="mt-8 space-y-4">
                  {section.items.map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-950/20 px-5 py-4 text-sm text-white/80">
                      <span>{item.label}</span>
                      <span className="font-semibold text-white">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-4xl border border-accent/10 bg-accent/5 p-8 text-white/90">
            <p className="text-sm leading-7">
              Need help choosing the best package? Contact us for a personalized recommendation based on your experience level and road test timeline.
            </p>
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 rounded-2xl bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-slate-950 transition-transform hover:scale-105 active:scale-95 shadow-xl"
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
                      <option className="bg-ink" value="60m Lessons - 1 Lesson">$80 - 60m Lesson (1)</option>
                      <option className="bg-ink" value="60m Lessons - 3 Lessons">$240 - 60m Lessons (3)</option>
                      <option className="bg-ink" value="60m Lessons - 5 Lessons">$390 - 60m Lessons (5)</option>
                      <option className="bg-ink" value="60m Lessons - 10 Lessons">$775 - 60m Lessons (10)</option>
                      <option className="bg-ink" value="60m Lessons - 5 + Road Test">$470 - 60m Lessons (5) + Road Test</option>
                      <option className="bg-ink" value="60m Lessons - 10 + Road Test">$850 - 60m Lessons (10) + Road Test</option>
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

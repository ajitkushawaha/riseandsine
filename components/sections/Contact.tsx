"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionEyebrow } from "@/components/global";

export const Contact = () => {
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
    <section id="contact" className="section-shell bg-ink-soft">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionEyebrow>Contact Us</SectionEyebrow>
            <h2 className="mt-8 font-headline text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl">
              Start your <br />
              <span className="text-accent">driving journey.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-white/50 sm:mt-10 sm:text-xl sm:leading-relaxed max-w-md">
              Whether you're starting from scratch or just need a final brush-up before your test, we're here to help in Kelowna.
            </p>
            
            <div className="mt-12 space-y-6 sm:space-y-8">
              <div className="flex items-center gap-5 sm:gap-6 group">
                <a href="tel:2503172175" className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 text-accent transition-all group-hover:bg-accent group-hover:text-slate-950 shadow-xl">
                  <Phone size={24} className="sm:size-7" />
                </a>
                <div>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Call direct</p>
                  <a href="tel:2503172175" className="text-2xl font-bold text-white tracking-tighter sm:text-3xl hover:text-accent transition-colors">250 317 2175</a>
                </div>
              </div>

              <div className="flex items-center gap-5 sm:gap-6 group">
                <a href="mailto:risenshinedriving@gmail.com" className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 text-accent transition-all group-hover:bg-accent group-hover:text-slate-950 shadow-xl">
                  <MessageCircle size={24} className="sm:size-7" />
                </a>
                <div>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Email us</p>
                  <a href="mailto:risenshinedriving@gmail.com" className="text-xl font-bold text-white tracking-tighter sm:text-3xl break-all hover:text-accent transition-colors">risenshinedriving@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] sm:rounded-[3.5rem] border border-white/10 bg-white/5 p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-3xl relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
               <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                 <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Learner Name</label>
                   <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 sm:py-4 text-white focus:border-accent focus:outline-none transition-colors placeholder:text-white/20" placeholder="Full name" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Phone Number</label>
                   <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 sm:py-4 text-white focus:border-accent focus:outline-none transition-colors placeholder:text-white/20" placeholder="Contact number" />
                 </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Our Programs</label>
                  <select name="program" value={formData.program} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 sm:py-4 text-white focus:border-accent focus:outline-none transition-all appearance-none cursor-pointer">
                    <option className="bg-ink" value="Select a package">Select a package</option>
                    <option className="bg-ink" value="Starter Program (8 Hours)">Starter Program (8 Hours)</option>
                    <option className="bg-ink" value="Standard Prep (5 Lessons)">Standard Prep (5 Lessons)</option>
                    <option className="bg-ink" value="Quick Foundation (3 Lessons)">Quick Foundation (3 Lessons)</option>
                  </select>
               </div>
               <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Message</label>
                   <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-white focus:border-accent focus:outline-none transition-colors placeholder:text-white/20" placeholder="Tell us about your driving experience..."></textarea>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;


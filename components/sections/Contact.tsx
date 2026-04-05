"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { SectionEyebrow } from "@/components/global";

export const Contact = () => {
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
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 text-accent transition-all group-hover:bg-accent group-hover:text-slate-950 shadow-xl">
                  <Phone size={24} className="sm:size-7" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Call direct</p>
                  <p className="text-2xl font-bold text-white tracking-tighter sm:text-3xl">250 317 2175</p>
                </div>
              </div>

              <div className="flex items-center gap-5 sm:gap-6 group">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl sm:rounded-3xl bg-white/5 text-accent transition-all group-hover:bg-accent group-hover:text-slate-950 shadow-xl">
                  <MessageCircle size={24} className="sm:size-7" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Email us</p>
                  <p className="text-xl font-bold text-white tracking-tighter sm:text-3xl break-all">risenshinedriving@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] sm:rounded-[3.5rem] border border-white/10 bg-white/5 p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-3xl">
            <form className="space-y-5 sm:space-y-6">
               <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                 <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Learner Name</label>
                   <input type="text" className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 sm:py-4 text-white focus:border-accent focus:outline-none transition-colors placeholder:text-white/20" placeholder="Full name" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Phone Number</label>
                   <input type="tel" className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 sm:py-4 text-white focus:border-accent focus:outline-none transition-colors placeholder:text-white/20" placeholder="Contact number" />
                 </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Our Programs</label>
                  <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 sm:py-4 text-white focus:border-accent focus:outline-none transition-all appearance-none cursor-pointer">
                    <option className="bg-ink">Select a package</option>
                    <option className="bg-ink">Starter Program (8 Hours)</option>
                    <option className="bg-ink">Standard Prep (5 Lessons)</option>
                    <option className="bg-ink">Quick Foundation (3 Lessons)</option>
                  </select>
               </div>
               <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Message</label>
                   <textarea rows={4} className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-white focus:border-accent focus:outline-none transition-colors placeholder:text-white/20" placeholder="Tell us about your driving experience..."></textarea>
               </div>
               <button className="button-primary w-full justify-center text-lg py-5 group transition-all">
                 Send Inquiry
                 <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
               </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

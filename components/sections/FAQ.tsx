"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { SectionEyebrow } from "@/components/global";
import { faqData } from "@/lib/data";

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faqs" className="section-shell">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center text-center mb-12 lg:items-start lg:text-left">
                    <SectionEyebrow>Driving School Features</SectionEyebrow>
                    <h2 className="mt-8 font-headline text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
                        Frequently Asked Questions.
                    </h2>
                    <p className="mt-8 text-lg text-white/50 leading-relaxed max-w-2xl sm:text-xl">
                        Quick answers to common questions about our ICBC road test preparation 
                        and licensing programs in the Kelowna area.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl space-y-4">
                    {faqData.map((item, index) => (
                        <FAQItem 
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQItem = ({ item, isOpen, onClick }: { item: typeof faqData[0], isOpen: boolean, onClick: () => void }) => {
    return (
        <div 
            className={`group rounded-4xl border transition-all duration-500 overflow-hidden ${
                isOpen 
                ? "border-accent/40 bg-accent/5 shadow-2xl" 
                : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
            }`}
        >
            <button 
                onClick={onClick}
                className="flex w-full items-center justify-between p-7 sm:p-10 text-left focus:outline-none"
            >
                <div className="flex items-center gap-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-500 ${
                        isOpen ? "bg-accent border-accent text-slate-950" : "bg-white/5 border-white/10 text-white/60"
                    }`}>
                        <HelpCircle size={24} />
                    </div>
                    <h3 className={`text-lg font-bold sm:text-xl transition-colors duration-300 ${
                        isOpen ? "text-white" : "text-white/70 group-hover:text-white"
                    }`}>
                        {item.question}
                    </h3>
                </div>
                <div className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500 ${
                    isOpen ? "bg-accent text-slate-950 rotate-90" : "bg-white/10 text-white/40"
                }`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <div className="px-10 pb-10 sm:px-24 sm:pb-12 border-t border-white/5 pt-8">
                            <p className="text-lg leading-relaxed text-white/60 sm:text-xl">
                                {item.answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FAQ;

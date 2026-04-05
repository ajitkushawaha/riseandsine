"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Phone,
  ArrowRight,
  MessageCircle,
  Calendar,
  Car
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
      <span className="h-2 w-2 rounded-full bg-accent" />
      {children}
    </div>
  );
}

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Reviews", href: "/#proof" },
    { name: "News", href: "/#news" },
  ];

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        scrolled ? "bg-black/80 py-4 backdrop-blur-2xl shadow-xl" : "bg-transparent py-8"
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link
          href={'/'}
          >
          <Image
          src="/logo.png"
          alt=""
          width={100}
          height={100}
          />
          </Link>

          <div className="hidden items-center gap-1.5 lg:flex">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest text-white/50 transition-all hover:bg-white/5 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <div className="mx-4 h-4 w-px bg-white/10" />
            <a href="tel:2503172175" className="flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-950 transition-transform active:scale-95 hover:bg-white">
              <Phone size={14} />
              250 317 2175
            </a>
          </div>

          <button onClick={() => setMobileOpen(true)} className="rounded-2xl bg-white/5 p-3 text-white transition-colors hover:bg-white/10 lg:hidden">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-slate-950 lg:hidden"
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex items-center justify-between mb-12">
                <span className="font-headline text-2xl font-bold text-white">MENU</span>
                <button onClick={() => setMobileOpen(false)} className="rounded-full bg-white/5 p-4 text-white">
                  <X size={28} />
                </button>
              </div>
              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setMobileOpen(false)} className="text-4xl font-headline font-bold text-white/40 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="mt-auto pt-10 border-t border-white/10">
                <p className="text-sm uppercase tracking-widest text-white/30 mb-6">Book your lesson</p>
                <a href="tel:2503172175" className="flex items-center justify-between rounded-3xl bg-accent p-6 text-xl font-bold text-slate-950">
                  Call Satpal
                  <Phone size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t border-white/8 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-white mb-2 uppercase tracking-widest">Rise n Shine Driving School</p>
          <p>© 2024. All rights reserved.</p>
        </div>
        <p className="max-w-xs text-right">Serving Kelowna, West Kelowna, Peachland, and Lake Country with pride.</p>
      </div>
    </footer>
  );
};

export const MobileDock = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-white/10 bg-ink/92 p-3 backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-3 gap-3">
        <a href="tel:2503172175" className="flex flex-col items-center gap-1 py-3 rounded-2xl bg-white/5 text-[10px] font-bold uppercase tracking-widest text-white">
          <Phone size={18} />
          Call
        </a>
        <a href="mailto:risenshinedriving@gmail.com" className="flex flex-col items-center gap-1 py-3 rounded-2xl bg-white/5 text-[10px] font-bold uppercase tracking-widest text-white">
          <MessageCircle size={18} />
          Email
        </a>
        <a href="/#contact" className="flex flex-col items-center gap-1 py-3 rounded-2xl bg-accent text-[10px] font-bold uppercase tracking-widest text-slate-950">
          <Calendar size={18} />
          Book
        </a>
      </div>
    </div>
  );
};

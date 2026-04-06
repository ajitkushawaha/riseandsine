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
  Car,
  Facebook,
  Instagram,
  MapPin
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
      <nav className={`fixed inset-x-0 top-0 z-100 transition-all duration-500 ${
        scrolled ? "bg-black/80 py-4 backdrop-blur-2xl shadow-xl" : "bg-transparent py-8"
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link
          href={'/'}
          >
          <Image
            src="/logo.png"
            alt="Rise n Shine Driving School Logo - Kelowna"
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
            className="fixed inset-0 z-200 bg-slate-950 lg:hidden"
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
    <footer className="relative isolate overflow-hidden border-t border-white/8 bg-ink/50 pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.5fr_0.5fr_1fr]">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="Rise n Shine Driving School Kelowna" width={120} height={120} className="brightness-110" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/40">
              Kelowna's premier driving school specializing in calm, confident ICBC road test preparation since 2011.
            </p>
            <div className="flex items-center gap-4">
               {["facebook", "instagram", "twitter"].map((social) => (
                 <div key={social} className="h-10 w-10 cursor-pointer rounded-xl border border-white/5 bg-white/5 transition-all hover:bg-accent hover:text-slate-950 flex items-center justify-center text-white/40">
                   <div className="w-1.5 h-1.5 rounded-full bg-current" />
                 </div>
               ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Navigation</h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/40">
              <li><Link href="/#about" className="hover:text-white transition-colors">About School</Link></li>
              <li><Link href="/#programs" className="hover:text-white transition-colors">Programs</Link></li>
              <li><Link href="/#gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/#news" className="hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Our Regions</h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/40">
              <li className="flex items-center gap-2 pt-1"><div className="h-1 w-1 rounded-full bg-white/20" /> Kelowna</li>
              <li className="flex items-center gap-2"><div className="h-1 w-1 rounded-full bg-white/20" /> West Kelowna</li>
              <li className="flex items-center gap-2"><div className="h-1 w-1 rounded-full bg-white/20" /> Peachland</li>
              <li className="flex items-center gap-2"><div className="h-1 w-1 rounded-full bg-white/20" /> Lake Country</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="rounded-[2.5rem] border border-white/5 bg-white/5 p-10 backdrop-blur-3xl">
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white">Direct Line</h3>
            <a href="tel:2503172175" className="block text-3xl font-bold tracking-tighter text-white hover:text-accent transition-colors">
              250 317 2175
            </a>
            <p className="mt-8 text-xs font-bold uppercase tracking-widest text-white/30">
              risenshinedriving@gmail.com
            </p>
            <div className="mt-8 flex items-center gap-3">
               <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Operating: 8am — 8pm</span>
            </div>

            {/* Social Links for SEO Authority */}
            <div className="mt-10 flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition-all hover:bg-accent hover:text-slate-950">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition-all hover:bg-accent hover:text-slate-950">
                <Instagram size={18} />
              </a>
              <a href="https://google.com/business" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition-all hover:bg-accent hover:text-slate-950">
                <MapPin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-6 border-t border-white/5 pt-12 sm:flex-row sm:items-center sm:justify-between text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
          <p>© 2024 Rise n Shine Driving School. Excellence in Driver Education.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const MobileDock = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-100 border-t border-white/10 bg-ink/92 p-3 backdrop-blur-xl lg:hidden">
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

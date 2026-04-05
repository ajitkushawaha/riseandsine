"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  ShieldCheck, 
  Clock3, 
  Users, 
  Award, 
  Search, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  X,
  Car,
  CheckCircle2,
  PlayCircle,
  ChevronDown
} from "lucide-react";

import { 
  testimonials, 
  blogPosts, 
  galleryImages, 
  programs 
} from "@/lib/data";

import { 
  Navbar, 
  Footer, 
  SectionEyebrow,
  MobileDock
} from "@/components/global";

const pillars = [
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

const steps = [
  {
    number: "01",
    title: "Consultation",
    text: "We discuss your driving history and goals to recommend the right package for your experience level.",
  },
  {
    number: "02",
    title: "1:1 Practical training",
    text: "Each 90-minute session focuses on specific skills, from basic controls to complex city intersections.",
  },
  {
    number: "03",
    title: "Defensive Mastery",
    text: "Learn to anticipate hazards, manage skids, and drive with awareness in various traffic conditions.",
  },
  {
    number: "04",
    title: "Road Test Success",
    text: "Use our vehicle for the test and benefit from our guidance through the ICBC booking process.",
  },
];

const proof = [
  {
    metric: "100%",
    label: "Dedicated 1:1 attention",
    detail: "No group lessons. Every minute of your training is focused entirely on your individual progress.",
  },
  {
    metric: "3 Cities",
    label: "BC Interior coverage",
    detail: "Expert instruction across Kelowna, Vernon, and Penticton with local road knowledge.",
  },
  {
    metric: "Dual Control",
    label: "Safe learning environment",
    detail: "All training is conducted in vehicles equipped with dual controls for your absolute safety.",
  },
];

const Hero = () => {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden border-b border-white/8">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1800&auto=format&fit=crop"
          alt="Modern car driving through the city at dusk"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,190,92,0.22),transparent_35%),linear-gradient(180deg,rgba(6,10,18,0.2),rgba(6,10,18,0.84)_55%,rgba(6,10,18,1))]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-14 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <SectionEyebrow>Kelowna based expert training</SectionEyebrow>
          <h1 className="mt-8 max-w-4xl font-headline text-5xl font-semibold leading-[0.92] text-white sm:text-6xl lg:text-[7.2rem]">
            Learn to drive
            <span className="block text-white/55">without the panic.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            A cinematic, confidence-first driving school experience for beginners who want calm coaching,
            structured practice, and real control on city roads.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="button-primary">
              Start your trial
              <ArrowRight size={18} />
            </a>
            <a href="#journey" className="button-secondary">
              Explore the journey
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid gap-4 border-t border-white/12 pt-8 sm:grid-cols-3"
        >
           <div className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
              <p className="text-3xl font-semibold text-white">$360</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/48">3 lessons + car special</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
              <p className="text-3xl font-semibold text-white">10+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/48">years of experience</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
              <p className="text-3xl font-semibold text-white">8am-8pm</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/48">operating hours</p>
            </div>
        </motion.div>

        <div className="mt-10 flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-white/45">
          <ChevronDown size={16} />
          Scroll to discover the method
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const services = [
    "Basic Driving Skills",
    "Parellel Parking",
    "Road Test Preparation",
    "Highway and City Driving",
    "Road Test Vehicle Usage",
    "1:1 Lessons",
  ];

  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="flex items-start gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5">
              <MapPin size={36} className="text-white" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xl font-medium text-accent">About Driving School</p>
              <h2 className="mt-2 font-headline text-5xl font-extrabold tracking-tight text-white sm:text-6xl text-center lg:text-left">
                Ready for safe, fun driving experience?
              </h2>
            </div>
          </div>

          <p className="mt-8 text-lg text-white/50 leading-relaxed max-w-4xl">
            Rise n Shine Driving School offers full spectrum training that goes well beyond fundamental rules and traffic regulations. The comprehensive services we offer include:
          </p>

          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="flex items-center gap-4">
                <Car size={20} className="text-accent" fill="currentColor" fillOpacity={0.2} />
                <span className="text-lg font-medium text-white/80">{service}</span>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
          >
            <img 
              src="https://risenshinedriving.com/wp-content/uploads/2021/03/IMG_9001-2-1.jpg" 
              alt="Rise n Shine Driving School Car"
              className="w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Instructor = () => {
  return (
    <section id="team" className="section-shell bg-ink-soft text-center lg:text-left">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-5 mb-14">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5">
            <Users size={36} className="text-white" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-xl font-medium text-accent">Driving School Team</p>
            <h2 className="mt-2 font-headline text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Qualified Instructor
            </h2>
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="panel-card overflow-hidden p-0!"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-[400px]">
              <img 
                src="https://risenshinedriving.com/wp-content/uploads/2021/03/IMG_5636-2-1.jpeg" 
                alt="Satpal Hans - Head Instructor"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink to-transparent lg:hidden" />
            </div>
            <div className="flex flex-col justify-center p-10 lg:p-16">
              <div className="flex items-center gap-2 text-accent justify-center lg:justify-start">
                <ShieldCheck size={20} />
                <span className="text-sm font-bold uppercase tracking-widest">Certified Specialist</span>
              </div>
              <h3 className="mt-6 font-headline text-4xl font-bold text-white">
                Satpal Hans
              </h3>
              <p className="mt-2 text-xl font-medium text-white/40">Owner / Head Instructor</p>
              
              <div className="mt-8 relative">
                 <p className="text-xl italic text-white/70 leading-relaxed relative z-10">
                   "I am Satpal Kaur Hans – owner and head instructor at Rise n Shine Driving School. I have 20 years on the road professional driving experience and Class – 4 Instructor driving licence. I have always enjoyed driving and teaching people to drive safely gives me a sense of satisfaction."
                 </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                 <div className="flex items-center gap-3 rounded-full border border-white/5 bg-white/5 px-5 py-3">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span className="text-sm font-bold text-white/80">Class-4 Licensed</span>
                 </div>
                 <div className="flex items-center gap-3 rounded-full border border-white/5 bg-white/5 px-5 py-3">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span className="text-sm font-bold text-white/80">BC Certified</span>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Pillars = () => {
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

const Programs = () => {
  return (
    <section id="programs" className="section-shell">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionEyebrow>Programs</SectionEyebrow>
            <h2 className="mt-8 max-w-3xl font-headline text-4xl font-semibold text-white sm:text-5xl">
              Confidently built training packages.
            </h2>
          </div>
          <p className="max-w-xl text-white/62">
            Pricing is crystal clear. Each package is designed around specific learning goals, ensuring you only pay for the time you need.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="program-card group"
            >
              {index === 1 && (
                <div className="absolute top-0 right-0 rounded-bl-3xl bg-accent px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-950">
                  Best Value
                </div>
              )}
              
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="mt-4 font-headline text-3xl font-bold text-white group-hover:text-accent transition-colors">{program.title}</h3>
                  </div>
                </div>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white leading-none tracking-tight">{program.price}</span>
                </div>

                <p className="mt-8 text-white/50 leading-relaxed font-bold uppercase text-xs tracking-widest">{program.duration}</p>
                <p className="mt-2 text-white/40 leading-relaxed text-sm">{program.summary}</p>

                <ul className="mt-10 space-y-4">
                  {program.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-white/72 text-sm">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10">
                        <CheckCircle2 size={12} className="text-accent" />
                      </div>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <a href="#contact" className="inline-flex w-full items-center justify-between rounded-2xl bg-white/5 px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all group-hover:bg-accent group-hover:text-slate-950">
                    Enquire now
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Journey = () => {
  return (
    <section id="journey" className="section-shell">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <SectionEyebrow>Journey</SectionEyebrow>
          <h2 className="mt-8 font-headline text-4xl font-semibold text-white sm:text-5xl">
            Success is a step-by-step process.
          </h2>
          <p className="mt-8 max-w-lg text-white/62">
            Every driver starts somewhere. We break down the complex mechanics of driving into simple, manageable milestones.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="timeline-card"
            >
              <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-accent/80">{step.number}</p>
                  <h3 className="mt-4 font-headline text-3xl font-semibold text-white">{step.title}</h3>
                </div>
                <p className="max-w-lg text-white/62">{step.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedGalleryIndex === null) return;
    setSelectedGalleryIndex((selectedGalleryIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    if (selectedGalleryIndex === null) return;
    setSelectedGalleryIndex((selectedGalleryIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="section-shell">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-16">
          <div className="bg-accent/10 p-5 rounded-full ring-8 ring-accent/5">
            <Car size={32} className="text-accent" />
          </div>
          <div className="text-center md:text-left">
            <SectionEyebrow>Driving School Photos</SectionEyebrow>
            <h2 className="mt-4 font-headline text-5xl font-bold text-white tracking-tight">Our Gallery</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={() => setSelectedGalleryIndex(0)}
            className="group relative h-[600px] overflow-hidden rounded-[3rem] border border-white/10 md:col-span-2 lg:col-span-1 lg:row-span-2 cursor-pointer"
          >
            <img 
              src={galleryImages[0].src} 
              alt={galleryImages[0].alt} 
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 p-10 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
              <p className="text-accent font-bold uppercase tracking-widest text-sm mb-3">{galleryImages[0].alt}</p>
              <h3 className="font-headline text-3xl font-bold text-white leading-tight">
                {galleryImages[0].detail}
              </h3>
            </div>
          </motion.div>

          {galleryImages.slice(1, 5).map((image, index) => (
             <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedGalleryIndex(index + 1)}
                className="group relative h-[288px] overflow-hidden rounded-[2.5rem] border border-white/10 cursor-pointer"
             >
                <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-accent font-bold uppercase tracking-widest text-[10px] mb-1">{image.alt}</p>
                    <h3 className="text-lg font-bold text-white">{image.detail}</h3>
                </div>
             </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedGalleryIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-110 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 lg:p-20"
              onClick={() => setSelectedGalleryIndex(null)}
            >
               <button 
                onClick={(e) => { e.stopPropagation(); setSelectedGalleryIndex(null); }}
                className="absolute right-8 top-8 z-120 text-white/40 hover:text-white transition-colors"
               >
                <X size={40} />
               </button>

               <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-8 top-1/2 z-120 -translate-y-1/2 p-4 rounded-full bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all shadow-xl"
               >
                <ChevronLeft size={32} />
               </button>

               <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-8 top-1/2 z-120 -translate-y-1/2 p-4 rounded-full bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all shadow-xl"
               >
                <ChevronRight size={32} />
               </button>

               <motion.div
                key={selectedGalleryIndex}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className="relative max-h-full max-w-6xl overflow-hidden rounded-[3rem] shadow-2xl"
                onClick={(e) => e.stopPropagation()}
               >
                 <img 
                    src={galleryImages[selectedGalleryIndex].src} 
                    className="h-auto max-h-[80vh] w-auto object-contain" 
                    alt={galleryImages[selectedGalleryIndex].alt} 
                 />
                 <div className="bg-ink/80 p-8 backdrop-blur-md">
                    <p className="text-accent font-bold uppercase tracking-widest text-xs mb-2">{galleryImages[selectedGalleryIndex].alt}</p>
                    <h3 className="text-xl font-bold text-white">{galleryImages[selectedGalleryIndex].detail}</h3>
                 </div>
               </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const News = () => {
  return (
    <section id="news" className="section-shell">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <SectionEyebrow>Our Blog</SectionEyebrow>
            <h2 className="mt-8 font-headline text-5xl font-bold text-white tracking-tight sm:text-6xl text-center mx-auto lg:text-left">
              Latest <span className="text-accent underline decoration-white/10 underline-offset-8">News.</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-white/40 hover:text-accent transition-colors">
            View All Stories <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, index) => (
            <Link 
              key={post.title} 
              href={`/blog/${post.id}`}
              className="group cursor-pointer block"
            >
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
              >
                <div className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/5 transition-colors group-hover:border-accent/20">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                  
                  <div className="absolute top-6 left-6">
                    <div className="rounded-full bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                      {post.category}
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2">
                      {post.date}
                    </p>
                    <h3 className="font-headline text-2xl font-bold text-white line-clamp-2 leading-tight group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Proof = () => {
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

const TestimonialStrip = () => {
  const [selectedStudent, setSelectedStudent] = useState<null | typeof testimonials[0]>(null);

  return (
    <section id="reviews" className="section-shell relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <SectionEyebrow>Student voices</SectionEyebrow>
          <h2 className="mt-8 font-headline text-5xl font-bold text-white tracking-tight sm:text-6xl text-center lg:text-left">
            Real Stories. <span className="text-white/30">Verified Wins.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
          {testimonials.map((student, index) => (
            <motion.div
              key={student.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setSelectedStudent(student)}
              onMouseLeave={() => setSelectedStudent(null)}
              className="group relative cursor-pointer pt-6"
            >
              <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-white/5 transition-all duration-500 group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(245,190,92,0.3)]">
                <img 
                  src={student.image} 
                  alt={student.name} 
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                />
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedStudent && (
             <motion.div
               initial={{ opacity: 0, y: 20, scale: 0.95 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               exit={{ opacity: 0, y: 20, scale: 0.95 }}
               className="pointer-events-none absolute left-1/2 top-[120%] z-50 w-full max-w-lg -translate-x-1/2 lg:top-[110%]"
             >
               <div className="rounded-[2.5rem] border border-white/10 bg-slate-900/40 p-10 shadow-2xl backdrop-blur-3xl ring-1 ring-white/10 ring-inset">
                 <div className="flex items-center gap-6">
                   <div className="h-44 w-32 overflow-hidden rounded-2xl border border-white/10">
                     <img src={selectedStudent.image} className="h-full w-full object-cover" alt="" />
                   </div>
                   <div className="flex-1">
                     <div className="mb-3 flex gap-1 text-accent">
                       {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                     </div>
                     <h3 className="text-2xl font-bold text-white">{selectedStudent.name}</h3>
                     <p className="text-sm font-bold uppercase tracking-widest text-accent mt-1">{selectedStudent.role}</p>
                     
                     <div className="mt-4 flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 w-fit border border-white/10">
                        <CheckCircle2 size={12} className="text-accent" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Verified Rise n Shine Student</span>
                     </div>
                   </div>
                 </div>
                 
                 <div className="mt-8 border-t border-white/5 pt-8 text-xl leading-relaxed text-white/70 italic">
                   "{selectedStudent.quote}"
                 </div>
               </div>
             </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-shell bg-ink-soft">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionEyebrow>Contact Us</SectionEyebrow>
            <h2 className="mt-8 font-headline text-5xl font-bold text-white tracking-tight sm:text-6xl">
              Start your <br />
              <span className="text-accent">driving journey.</span>
            </h2>
            <p className="mt-10 text-xl text-white/50 leading-relaxed max-w-md">
              Whether you're starting from scratch or just need a final brush-up before your test, we're here to help.
            </p>
            
            <div className="mt-12 space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/5 text-accent transition-all group-hover:bg-accent group-hover:text-slate-950 shadow-xl">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Call direct</p>
                  <p className="text-3xl font-bold text-white tracking-tighter">250 317 2175</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/5 text-accent transition-all group-hover:bg-accent group-hover:text-slate-950 shadow-xl">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Email us</p>
                  <p className="text-3xl font-bold text-white tracking-tighter">risenshinedriving@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[3.5rem] border border-white/10 bg-white/5 p-12 backdrop-blur-2xl shadow-3xl">
            <form className="space-y-6">
               <div className="grid gap-6 sm:grid-cols-2">
                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-4">Learner Name</label>
                   <input type="text" className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white focus:border-accent focus:outline-none transition-colors" placeholder="Full name" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-4">Phone Number</label>
                   <input type="tel" className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white focus:border-accent focus:outline-none transition-colors" placeholder="Contact number" />
                 </div>
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-4">Our Programs</label>
                  <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white focus:border-accent focus:outline-none transition-all appearance-none">
                    <option className="bg-ink">Select a package</option>
                    <option className="bg-ink">Starter Program (8 Hours)</option>
                    <option className="bg-ink">Standard Prep (5 Lessons)</option>
                    <option className="bg-ink">Quick Foundation (3 Lessons)</option>
                  </select>
               </div>
               <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-4">Message</label>
                   <textarea rows={4} className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-white focus:border-accent focus:outline-none transition-colors" placeholder="Tell us about your driving experience..."></textarea>
               </div>
               <button className="button-primary w-full justify-center text-lg py-5 group">
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

export default function Home() {
  return (
    <div className="bg-ink font-sans selection:bg-accent/30 selection:text-ink">
      <Navbar />
      <main>
        <Hero />
        <News />
        <About />
        <Instructor />
        <Pillars />
        <Programs />
        <Journey />
        <Gallery />
        <Proof />
        <TestimonialStrip />
        <Contact />
      </main>
      <Footer />
      <MobileDock />
    </div>
  );
}

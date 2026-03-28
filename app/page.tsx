"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  Calendar,
  Car,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const navItems = [
  { label: "Approach", href: "#approach" },
  { label: "Programs", href: "#programs" },
  { label: "Journey", href: "#journey" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "#contact" },
];

const heroStats = [
  { value: "4.9/5", label: "student satisfaction" },
  { value: "500+", label: "learners trained" },
  { value: "15 days", label: "beginner program" },
];

const pillars = [
  {
    title: "Built for nervous beginners",
    copy:
      "We slow the pace down, remove the pressure, and coach every decision until the road feels familiar.",
  },
  {
    title: "Training that fits real life",
    copy:
      "Morning, evening, and doorstep pickup options make practice easier to sustain for busy students.",
  },
  {
    title: "Confidence before speed",
    copy:
      "Our sessions focus on awareness, judgment, parking, lane discipline, and calm control before anything else.",
  },
];

const programs = [
  {
    title: "Starter Program",
    duration: "15 guided sessions",
    price: "Rs. 4,500",
    summary: "For first-time learners who want a full practical foundation from zero.",
    bullets: ["Road basics", "Parking routines", "Traffic confidence"],
  },
  {
    title: "Confidence Reset",
    duration: "8 focused sessions",
    price: "Rs. 2,500",
    summary: "For licensed drivers who still avoid traffic, flyovers, or busy intersections.",
    bullets: ["City driving", "Decision-making", "Anxiety reduction"],
  },
  {
    title: "Automatic Track",
    duration: "15 guided sessions",
    price: "Rs. 5,500",
    summary: "For learners who want a smoother introduction in automatic vehicles.",
    bullets: ["Smooth control", "Modern car systems", "Daily commute prep"],
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery call",
    text: "We understand your confidence level, preferred timings, and pickup area before assigning a trainer.",
  },
  {
    number: "02",
    title: "Trial lesson",
    text: "You experience the teaching style, vehicle setup, and first practical movements with zero pressure.",
  },
  {
    number: "03",
    title: "Structured training",
    text: "Each session builds on the last with clear milestones, from controls to traffic to independent driving.",
  },
  {
    number: "04",
    title: "Road-ready finish",
    text: "We close the loop with test preparation, real-route practice, and confidence for everyday travel.",
  },
];

const proof = [
  {
    metric: "500+",
    label: "Students guided across Ahmedabad",
    detail: "Learners, working professionals, and first-time drivers trained with a repeatable method.",
  },
  {
    metric: "10+",
    label: "Years of local teaching experience",
    detail: "A mature playbook for traffic, junctions, parking, and confidence-building.",
  },
  {
    metric: "Doorstep",
    label: "Pickup and drop support",
    detail: "Training begins near your home so the route feels relevant from the first lesson.",
  },
];

const testimonials = [
  {
    name: "Aarohi Mehta",
    role: "First-time learner",
    quote:
      "I stopped fearing traffic because every class felt calm and structured. By the end, I could drive to work on my own.",
  },
  {
    name: "Nikhil Shah",
    role: "Refresher student",
    quote:
      "What changed for me was the coaching style. They did not rush, and they kept repeating the right habits until they became natural.",
  },
  {
    name: "Riya Desai",
    role: "Female instructor program",
    quote:
      "The sessions felt safe, respectful, and genuinely confidence-building. It never felt intimidating.",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    alt: "Premium learner car on the road",
  },
  {
    src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop",
    alt: "Instructor guiding a student through a city route",
  },
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop",
    alt: "Vehicle detail and polished training fleet",
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
      <span className="h-2 w-2 rounded-full bg-accent" />
      {children}
    </div>
  );
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-white/10 bg-ink/82 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8">
            <Car size={20} className="text-accent" />
          </div>
          <div>
            <p className="font-headline text-lg font-semibold tracking-[0.24em] text-white uppercase">
              Rise & Shine
            </p>
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">
              Driving atelier
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm uppercase tracking-[0.22em] text-white/68 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+919876543210"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            +91 98765 43210
          </a>
          <a href="#contact" className="button-primary">
            Book a trial
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="border-t border-white/10 bg-ink/96 px-6 py-6 lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm uppercase tracking-[0.22em] text-white/72"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="button-primary text-center" onClick={() => setMobileOpen(false)}>
                Book a trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

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
          <SectionEyebrow>Ahmedabad based premium training</SectionEyebrow>
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
          {heroStats.map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
              <p className="text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/48">{item.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-10 flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-white/45">
          <ChevronDown size={16} />
          Scroll to discover the method
        </div>
      </div>
    </section>
  );
};

const IntroPanel = () => {
  return (
    <section id="approach" className="section-shell">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <SectionEyebrow>Our approach</SectionEyebrow>
          <h2 className="mt-8 max-w-3xl font-headline text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Borrow the discipline of a premium brand, keep the warmth of a local school.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-6 text-base leading-8 text-white/68"
        >
          <p>
            We are not trying to feel corporate. We are building a sharper, calmer experience for students
            who want to trust the process from the first call to the first solo drive.
          </p>
          <p>
            The site should feel deliberate, spacious, and premium, but every section still needs to answer
            practical questions about safety, schedule, price, and support.
          </p>
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
              Clear offers. Calm positioning. No clutter.
            </h2>
          </div>
          <p className="max-w-xl text-white/62">
            A Montfort-inspired layout works best when every card feels intentional. These packages stay simple,
            premium, and easy to compare.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="program-card"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-white/40">{program.duration}</p>
                  <h3 className="mt-4 font-headline text-3xl font-semibold text-white">{program.title}</h3>
                </div>
                <div className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-white/72">
                  {program.price}
                </div>
              </div>

              <p className="mt-8 text-white/64">{program.summary}</p>

              <ul className="mt-10 space-y-4">
                {program.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 text-white/72">
                    <CheckCircle2 size={18} className="text-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="mt-12 inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-white">
                Enquire now
                <ArrowRight size={16} />
              </a>
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
            A scroll-led story should still explain the real process.
          </h2>
          <p className="mt-8 max-w-lg text-white/62">
            Instead of throwing every feature at the user, we slow down and walk them through how trust is built
            lesson by lesson.
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
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[540px] overflow-hidden rounded-[2rem] border border-white/10"
          >
            <img src={galleryImages[0].src} alt={galleryImages[0].alt} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 sm:p-10">
              <SectionEyebrow>Training atmosphere</SectionEyebrow>
              <p className="mt-6 max-w-lg font-headline text-3xl font-semibold text-white sm:text-4xl">
                Every visual cue should support trust, polish, and control.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {galleryImages.slice(1).map((image, index) => (
              <motion.div
                key={image.alt}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="relative min-h-[255px] overflow-hidden rounded-[2rem] border border-white/10"
              >
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <p className="absolute bottom-6 left-6 max-w-xs text-sm uppercase tracking-[0.2em] text-white/76">
                  {image.alt}
                </p>
              </motion.div>
            ))}
          </div>
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
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="proof-card"
            >
              <p className="font-headline text-5xl font-semibold text-white">{item.metric}</p>
              <h3 className="mt-8 text-xl font-medium text-white">{item.label}</h3>
              <p className="mt-4 text-white/58">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialStrip = () => {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <SectionEyebrow>Student voices</SectionEyebrow>
          <h2 className="mt-8 max-w-3xl font-headline text-4xl font-semibold text-white sm:text-5xl">
            Premium style only works if the human proof still feels believable.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="panel-card"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={16} className="fill-current" />
                ))}
              </div>
              <p className="mt-8 text-lg leading-8 text-white/72">"{item.quote}"</p>
              <footer className="mt-10 border-t border-white/10 pt-6">
                <p className="font-medium text-white">{item.name}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/42">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const contactItems = [
    {
      icon: <Phone size={18} />,
      label: "Call",
      value: "+91 98765 43210",
    },
    {
      icon: <MessageCircle size={18} />,
      label: "WhatsApp",
      value: "Quick responses during business hours",
    },
    {
      icon: <MapPin size={18} />,
      label: "Coverage",
      value: "Ahmedabad city with doorstep pickup support",
    },
  ];

  const trustItems = [
    { icon: <ShieldCheck size={18} />, text: "Dual-control learner cars" },
    { icon: <Clock3 size={18} />, text: "Flexible morning and evening slots" },
    { icon: <Users size={18} />, text: "Female instructor option available" },
    { icon: <Award size={18} />, text: "Structured beginner-focused teaching" },
  ];

  return (
    <section id="contact" className="section-shell pb-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="panel-card"
        >
          <SectionEyebrow>Contact</SectionEyebrow>
          <h2 className="mt-8 font-headline text-4xl font-semibold text-white sm:text-5xl">
            The last section should feel like a confident invitation.
          </h2>
          <p className="mt-8 max-w-xl text-white/64">
            Strong motion brings people in. Clear contact details and a simple form get them to act.
          </p>

          <div className="mt-10 space-y-5">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/4 p-4">
                <div className="mt-1 text-accent">{item.icon}</div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/42">{item.label}</p>
                  <p className="mt-2 text-white/78">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div key={item.text} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-4 text-sm text-white/72">
                <span className="text-accent">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="rounded-[2rem] border border-white/10 bg-white p-8 text-slate-900 shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:p-10"
        >
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Book a trial session</p>
          <form className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-600">Full name</span>
                <input type="text" placeholder="Your name" className="form-input" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-600">Phone number</span>
                <input type="tel" placeholder="+91 98765 43210" className="form-input" />
              </label>
            </div>

            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-600">Preferred program</span>
              <select className="form-input">
                <option>Starter Program</option>
                <option>Confidence Reset</option>
                <option>Automatic Track</option>
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-600">What would help most?</span>
              <textarea
                rows={5}
                placeholder="Tell us if you are a complete beginner, returning after a break, or want a female instructor."
                className="form-input min-h-36 resize-none"
              />
            </label>

            <button type="submit" className="button-dark w-full justify-center">
              Request a callback
              <ArrowRight size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/8 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between">
        <p>Rise & Shine Driving Atelier</p>
        <p>Premium storytelling direction for a local driving school brand.</p>
      </div>
    </footer>
  );
};

const MobileDock = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/92 p-3 backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-3 gap-3">
        <a href="tel:+919876543210" className="dock-button">
          <Phone size={18} />
          Call
        </a>
        <a href="https://wa.me/919876543210" className="dock-button">
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <a href="#contact" className="dock-button dock-button-accent">
          <Calendar size={18} />
          Trial
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="bg-ink text-white">
      <Navbar />
      <main>
        <Hero />
        <IntroPanel />
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

"use client";

import React, { useMemo } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight,
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck,
  Award,
  ChevronRight,
  User,
  Quote
} from "lucide-react";

import { blogPosts } from "@/lib/data";
import { Navbar, Footer, SectionEyebrow } from "@/components/global";
import Image from "next/image";

interface BlogContentProps {
  post: typeof blogPosts[0];
  relatedPosts: typeof blogPosts;
}

export const BlogContent = ({ post, relatedPosts }: BlogContentProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-ink selection:bg-accent/30 selection:text-ink">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-accent z-1000 origin-left" style={{ scaleX }} />
      
      <Navbar />

      <main className="pt-32 pb-40">
        {/* Breadcrumbs for SEO */}
        <nav className="mx-auto max-w-7xl px-6 mb-12">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                <div className="h-0.5 w-4 bg-white/10" />
                <span className="text-white/60">Success Stories</span>
                <div className="h-0.5 w-4 bg-white/10" />
                <span className="text-accent">{post.title}</span>
            </div>
        </nav>

        {/* Hero Section */}
        <article className="mx-auto max-w-7xl px-6">
          <header className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <div className="rounded-full bg-accent px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-950">
                    {post.category}
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                   <ShieldCheck size={12} className="text-accent" />
                   ICBC Kelowna Verified
                </div>
              </div>
              
              <h1 className="font-headline text-4xl font-bold leading-[1.05] text-white sm:text-7xl lg:text-[7.5rem] lg:leading-[0.95] tracking-tight max-w-6xl">
                {post.title}.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/40 italic font-medium sm:mt-12 sm:text-xl">
                  "{post.successStory.substring(0, 100)}..." 
                  <span className="block mt-4 not-italic text-xs font-bold uppercase tracking-[0.3em] text-accent">— A Journey into Road Independence</span>
              </p>
              
              <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-10 border-t border-white/10 pt-12 sm:mt-16 sm:pt-16">
                <MetaItem icon={<Calendar size={18} />} label="Test Date" value={post.date} />
                <MetaItem icon={<MapPin size={18} />} label="Location" value="Kelowna, BC" />
                <MetaItem icon={<User size={18} />} label="Instructor" value="Satpal Hans" />
                <div className="ml-auto hidden xl:block">
                    <div className="flex items-center gap-3 rounded-2xl border border-accent/20 bg-accent/5 px-8 py-5">
                         <div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                            <CheckCircle2 className="text-accent" size={20} />
                         </div>
                         <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Result</p>
                            <p className="text-lg font-bold text-white uppercase tracking-wider">Passed on 1st Attempt</p>
                         </div>
                    </div>
                </div>
              </div>
            </motion.div>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="group relative mb-20 sm:mb-32 aspect-video sm:aspect-21/10 overflow-hidden rounded-[2.5rem] sm:rounded-[4rem] border border-white/10 ring-1 ring-white/10 ring-inset shadow-3xl"
          >
            <Image 
              src={post.image} 
              alt={post.title} 
              fill
              className="object-contain grayscale transition-all duration-[3s] group-hover:grayscale-0 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,10,18,0.8)_0%,transparent_40%),linear-gradient(to_bottom,rgba(6,10,18,0.4)_0%,transparent_20%)]" />
          </motion.div>

          <div className="grid gap-16 lg:gap-24 lg:grid-cols-[1.6fr_1fr]">
            <section className="relative">
              <div className="absolute -left-12 top-0 hidden xl:block">
                  <div className="flex flex-col gap-6">
                      <div className="h-12 w-px bg-linear-to-b from-accent to-transparent ml-2" />
                      <Quote className="text-white/10" size={32} />
                  </div>
              </div>

              <div className="prose prose-invert prose-lg sm:prose-2xl max-w-none">
                <p className="font-headline text-2xl sm:text-3xl font-medium leading-relaxed text-white/80 first-letter:text-6xl sm:first-letter:text-8xl first-letter:font-bold first-letter:text-accent first-letter:mr-3 sm:first-letter:mr-4 first-letter:float-left">
                    At Rise n Shine Driving School, success is never accidental—it's a calculated journey of confidence. For this road test in the BC interior, the focus remained on identifying the unique stressors that new drivers face in urban Kelowna.
                </p>
                <div className="h-12" />
                <p className="text-xl leading-[1.8] text-white/60">
                   {post.successStory} 
                </p>
                <p className="mt-8 text-xl leading-[1.8] text-white/60">
                    The keys to this success were consistency and our specialized <Link href="/#programs" className="text-accent underline decoration-white/20 underline-offset-8 hover:text-white transition-colors">ICBC road test preparation</Link> curriculum, which focuses on the exact local routes used by the BC examiners.
                </p>
              </div>
              
              <div className="mt-20 relative overflow-hidden rounded-[3rem] bg-ink-soft border border-white/8 p-12 lg:p-16">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Award size={160} className="text-white" />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent/20">
                            <Award className="text-accent" size={24} />
                        </div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-white/40">Expert Insight</h3>
                    </div>
                    <blockquote className="text-3xl font-headline font-bold text-white leading-tight">
                      "{post.instructorAdvice}"
                    </blockquote>
                    <div className="mt-10 flex items-center gap-4">
                        <div className="h-12 w-12 overflow-hidden rounded-full border border-accent/30 relative">
                            <Image src="/instructor.jpeg" fill className="object-cover" alt="Satpal Hans" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-white">Satpal Hans</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-accent mt-0.5">BC Licensed Instructor</p>
                        </div>
                    </div>
                </div>
              </div>
            </section>

            <aside className="space-y-16">
              <div className="sticky top-32 space-y-12">
                  <div className="rounded-[3.5rem] border border-accent/20 bg-linear-to-br from-accent/10 to-transparent p-12 backdrop-blur-3xl shadow-2xl overflow-hidden relative group">
                    <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-accent/5 blur-3xl transition-all group-hover:bg-accent/10" />
                    
                    <h3 className="font-headline text-4xl font-bold text-white mb-8 tracking-tight">Your success <br />starts here.</h3>
                    <p className="text-white/60 leading-relaxed mb-12 text-lg">
                      Join hundreds of successful students who found their road independence through calm, expert coaching.
                    </p>
                    
                    <div className="space-y-4 mb-12">
                        <BenefitItem text="Dual-Control Safety" />
                        <BenefitItem text="Kelowna Route Training" />
                        <BenefitItem text="Flexible Booking Hours" />
                        <BenefitItem text="Patient Expert Mentor" />
                    </div>

                    <Link href="/#contact" className="button-primary w-full justify-center py-6 text-lg hover:scale-105 active:scale-95 transition-all shadow-xl">
                      Book Trial Lesson
                      <ArrowRight size={20} />
                    </Link>
                  </div>

                  <div className="px-8">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-8 ml-4">Featured Packages</h3>
                    <div className="space-y-4">
                      {["ICBC Road Test Prep", "The Starter Program", "Quick Brush-Up"].map((prog) => (
                        <Link href="/#programs" key={prog} className="flex items-center justify-between group rounded-2xl border border-white/5 bg-white/5 px-6 py-5 hover:bg-white/10 hover:border-white/10 transition-all">
                          <span className="text-sm font-bold text-white/60 group-hover:text-white transition-colors">{prog}</span>
                          <ChevronRight size={16} className="text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
              </div>
            </aside>
          </div>
        </article>

        {/* Cinematic Related Posts */}
        <section className="mx-auto max-w-7xl px-6 mt-48 border-t border-white/8 pt-32">
            <div className="mb-16 flex items-end justify-between">
                <div>
                    <SectionEyebrow>Next Story</SectionEyebrow>
                    <h2 className="mt-8 font-headline text-5xl font-bold text-white tracking-tight">Read more successes.</h2>
                </div>
                <Link href="/" className="hidden sm:flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-accent hover:text-white transition-colors group">
                    View Hub <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((post, idx) => (
                    <Link key={post.id} href={`/blog/${post.id}`} className="group block">
                        <div className="relative aspect-3/4 overflow-hidden rounded-[3rem] bg-white/5 border border-white/5 transition-all duration-700 group-hover:border-accent/40 group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                            <Image src={post.image} fill className="object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-110" alt="" />
                            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-10 left-10 right-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">{post.category}</p>
                                    <div className="h-px flex-1 bg-white/10" />
                                </div>
                                <h3 className="font-headline text-2xl font-bold text-white leading-[1.1] group-hover:text-accent transition-colors">
                                    {post.title}
                                </h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

function MetaItem({ icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent ring-1 ring-white/10">
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">{label}</p>
                <p className="text-lg font-bold text-white mt-0.5">{value}</p>
            </div>
        </div>
    );
}

function BenefitItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-4 group/item">
            <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center transition-all group-hover/item:bg-accent/40">
                <CheckCircle2 size={12} className="text-accent" />
            </div>
            <span className="text-sm font-bold text-white/60 group-hover/item:text-white transition-colors uppercase tracking-widest">{text}</span>
        </div>
    );
}

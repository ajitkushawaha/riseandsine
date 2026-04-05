"use client";

import React from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft,
  ArrowRight,
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Star,
  Quote,
  Share2,
  Bookmark
} from "lucide-react";
import { blogPosts } from "@/lib/data";
import { Navbar, Footer, SectionEyebrow } from "@/components/global";

export default function BlogPost() {
  const { id } = useParams();
  const router = useRouter();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ink text-white">
        <div className="text-center">
          <h1 className="text-4xl font-headline font-bold mb-4">Story not found</h1>
          <button onClick={() => router.push("/")} className="text-accent hover:underline">Return Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ink text-white font-sans selection:bg-accent/30">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mb-12">
            <button 
              onClick={() => router.push("/#news")} 
              className="group mb-12 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
            >
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              Back to news
            </button>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionEyebrow>{post.category}</SectionEyebrow>
              <h1 className="mt-12 max-w-4xl font-headline text-5xl font-bold leading-[1.1] text-white sm:text-7xl lg:text-8xl">
                {post.title}
              </h1>
              
              <div className="mt-12 flex flex-wrap items-center gap-10 text-sm font-bold uppercase tracking-widest text-white/40 border-y border-white/5 py-8">
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-accent" />
                  {post.date}
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-accent" />
                  Kelowna, British Columbia
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-accent" />
                  Verified Success
                </div>
                <div className="ml-auto flex items-center gap-4">
                  <button className="rounded-full bg-white/5 p-3 hover:bg-white/10 transition-colors"><Share2 size={18} /></button>
                  <button className="rounded-full bg-white/5 p-3 hover:bg-white/10 transition-colors"><Bookmark size={18} /></button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Epic Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative aspect-[21/9] w-full overflow-hidden rounded-[3.5rem] border border-white/10 shadow-2xl"
          >
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          </motion.div>

          {/* Content Block */}
          <div className="mt-24 grid gap-20 lg:grid-cols-[1fr_0.45fr]">
            <article className="space-y-12">
              <div className="relative">
                <Quote size={60} className="absolute -left-16 -top-8 text-white/5 hidden xl:block" />
                <h2 className="text-4xl font-headline font-bold text-white tracking-tight leading-snug">
                  "Every road test pass is personal. For {post.title.split(' ')[0]}, the focus was on technical precision and defensive awareness."
                </h2>
              </div>
              
              <div className="space-y-8 text-xl leading-relaxed text-white/60 font-light">
                <p>{post.successStory}</p>
                <div className="rounded-[2.5rem] border border-accent/20 bg-accent/5 p-10">
                  <p className="mb-6 font-bold uppercase tracking-[0.2em] text-accent text-sm">Instructor's Strategy</p>
                  <p className="text-white text-2xl italic leading-relaxed">
                    {post.instructorAdvice}
                  </p>
                </div>
                <p>
                  Professional driving instruction goes beyond just passing a test. It's about building lifetime habits that ensure safety for the driver and those around them. We are incredibly proud of this achievement.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-12 border-t border-white/5">
                {["ICBC Road Test", "Kelowna Driving School", "Safe Driving", "Class 4 Mastery"].map((tag) => (
                  <span key={tag} className="rounded-full bg-white/5 px-6 py-2 text-xs font-bold uppercase tracking-widest text-white/40 ring-1 ring-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <aside className="space-y-10">
              <div className="rounded-[3rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
                <div className="flex items-center gap-1 text-accent mb-6">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={20} className="fill-current" />)}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Inspired by this story?</h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Join hundreds of students in Kelowna who have aced their road tests with Satpal's expert guidance.
                </p>
                <div className="space-y-4">
                  <button className="button-dark w-full justify-center group py-6 text-lg">
                    Book Trial Session
                    <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
                    Next slots available Monday
                  </p>
                </div>
              </div>

              <div className="rounded-[3rem] border border-white/10 p-10 overflow-hidden relative group cursor-pointer transition-all hover:border-accent/40">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1661608930472-768826723049?q=80&w=1200" 
                  className="absolute inset-0 h-full w-full object-cover opacity-20 transition-transform group-hover:scale-105" 
                  alt="Training" 
                />
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-2">Confidence Program</h3>
                  <p className="text-white/40 text-sm mb-6">8 hours of intensive training.</p>
                  <div className="text-accent font-bold text-2xl">$450</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

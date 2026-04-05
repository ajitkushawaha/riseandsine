"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { SectionEyebrow } from "@/components/global";

export const News = () => {
  return (
    <section id="news" className="section-shell">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left mx-auto lg:mx-0">
            <SectionEyebrow>Our Blog</SectionEyebrow>
            <h2 className="mt-8 font-headline text-5xl font-bold text-white tracking-tight sm:text-6xl">
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

export default News;

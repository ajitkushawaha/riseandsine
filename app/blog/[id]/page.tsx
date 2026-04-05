import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import { BlogContent } from "@/components/blog/BlogContent";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return {
      title: "Story Not Found | Rise n Shine Driving School",
    };
  }

  return {
    title: `${post.title} | Kelowna Success Stories | Rise n Shine`,
    description: `${post.successStory.substring(0, 150)}... Read how ${post.title.split(' ')[0]} passed their ICBC road test in Kelowna with Rise n Shine Driving School.`,
    openGraph: {
      title: `${post.title} - Driving Success in Kelowna`,
      description: post.successStory.substring(0, 160),
      images: [post.image],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== id).slice(0, 3);

  return <BlogContent post={post} relatedPosts={relatedPosts} />;
}

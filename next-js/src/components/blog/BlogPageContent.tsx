"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import BlogHero from "./BlogHero";
import BlogPosts from "./BlogPosts";
import FeaturedPost from "./FeaturedPost";
import { useTheme } from "../../components/ThemeProvider";
import { BlogPost } from "@/lib/blog";

interface BlogPageContentProps {
  posts: BlogPost[];
  featuredPost: BlogPost | null;
  categories: string[];
  tags: string[];
}

export default function BlogPageContent({
  posts,
  featuredPost,
  categories,
  tags,
}: BlogPageContentProps) {
  const { setDarkTheme } = useTheme();

  // Set light theme when component mounts
  useEffect(() => {
    setDarkTheme(false);
    // No need for cleanup as default is already false
  }, [setDarkTheme]);

  return (
    <motion.main
      className="min-h-screen bg-background text-primary relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BlogHero />
      {featuredPost && <FeaturedPost post={featuredPost} />}
      <BlogPosts posts={posts} categories={categories} tags={tags} />
    </motion.main>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import BlogHero from '../../components/blog/BlogHero';
import BlogPosts from '../../components/blog/BlogPosts';
import FeaturedPost from '@/components/blog/FeaturedPost';
import { useTheme } from '../../components/ThemeProvider';

export default function BlogPage() {
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
      <FeaturedPost />
      <BlogPosts />
    </motion.main>
  );
} 
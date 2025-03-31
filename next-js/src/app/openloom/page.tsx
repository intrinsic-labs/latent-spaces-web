'use client';

import { useEffect, useState } from 'react';
import OpenLoomHeader from '@/components/openloom/OpenLoomHeader';
import OpenLoomContent from '@/components/openloom/OpenLoomContent';
import { getBlogPost } from '@/lib/blog';
import { useTheme } from '@/components/ThemeProvider';
import { BlogPost } from '@/lib/blog';

export default function OpenLoomPage() {
  const { setDarkTheme } = useTheme();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Set dark theme when component mounts
  useEffect(() => {
    setDarkTheme(true);
    // Clean up function to reset theme when navigating away
    return () => setDarkTheme(false);
  }, [setDarkTheme]);
  
  // Fetch post data
  useEffect(() => {
    const loadPost = async () => {
      try {
        const postData = await getBlogPost("openloom");
        setPost(postData);
      } catch (error) {
        console.error("Failed to load OpenLoom post:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadPost();
  }, []);
  
  if (loading) {
    return (
      <main className="min-h-screen bg-ls-background flex items-center justify-center">
        <div className="animate-pulse text-white">Loading...</div>
      </main>
    );
  }
  
  return (
    <main className="min-h-screen bg-ls-background">
      {post && (
        <>
          <OpenLoomHeader post={post} />
          <OpenLoomContent post={post} />
        </>
      )}
    </main>
  );
} 
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import { BlogPost } from '@/lib/blog';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface OpenLoomHeaderProps {
  post: BlogPost;
}

const OpenLoomHeader = ({ post }: OpenLoomHeaderProps) => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollY = window.scrollY;
        backgroundRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative pt-8 md:pt-12 lg:pt-16 overflow-hidden">
      <div ref={backgroundRef} className="absolute top-0 left-0 w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1 }}
          className="h-full w-full"
        >
          <Image 
            src="/images/blog/005 Medium.jpeg" 
            alt="Latent Spaces background" 
            fill
            priority
            quality={100}
            className="z-0 object-cover opacity-50"
          />
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        
        <div className="max-w-4xl mx-auto pt-16 text-center">
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-xl mb-6 text-center"
          >
            OpenLoom
          </motion.h1>
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-5 mb-8 justify-center"
          >
            
            <div className="text-xl pt-2 font-calling-code text-neutral-200 drop-shadow-md">
              A Protocol For Loom Interfaces
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-5 mb-10 justify-center"
          >
            
            <div className="text-md font-calling-code text-neutral-300 border border-neutral-400 rounded-full px-4 py-1 bg-neutral-300/10 backdrop-blur-md">
              Current Version: {post.id}
            </div>
          </motion.div>
          
          {/* Featured image */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-xl overflow-hidden mx-auto border border-neutral-800"
          >
            {post.coverImage ? (
              <div className="aspect-w-16 aspect-h-16 md:aspect-h-12 lg:aspect-h-8">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="object-cover w-full h-full"
                />
              </div>
            ) : (
              <PlaceholderImage 
                text={post.title} 
                aspectRatio="16/9"
              />
            )}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default OpenLoomHeader; 
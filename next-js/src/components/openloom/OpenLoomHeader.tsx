"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import { BlogPost } from '@/lib/blog';

interface OpenLoomHeaderProps {
  post: BlogPost;
}

const OpenLoomHeader = ({ post }: OpenLoomHeaderProps) => {
  return (
    <section className="relative pt-8 md:pt-12 lg:pt-16 overflow-hidden">
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
            className="flex flex-wrap items-center gap-5 mb-10 justify-center"
          >
            
            <div className="text-xl pt-2 font-calling-code text-neutral-300">
              A Protocol For Loom Interfaces
            </div>
          </motion.div>
          
          {/* Featured image */}
          <motion.div
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenLoomHeader; 
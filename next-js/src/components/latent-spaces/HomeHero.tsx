"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const HomeHero = () => {
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
            src="/images/latent-spaces/background.png" 
            alt="Latent Spaces background" 
            fill
            priority
            quality={100}
            className="z-0 object-cover"
          />
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        
        <div className="max-w-4xl mx-auto pt-16 text-center">
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="heading-xl font-regular mb-6 text-center"
          >
            Latent Spaces
          </motion.h1>
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex flex-wrap items-center gap-5 mb-8 justify-center"
          >
            
            <div className="text-xl pt-2 font-calling-code text-neutral-300">
              A Loom Interface
            </div>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <a 
            href="#fundraising" 
            className="inline-block bg-ls-accent hover:bg-ls-accent/30 backdrop-blur-md border border-ls-accent hover:border-ls-accentLight text-white py-3 w-full max-w-[325px]md:max-w-[400px] font-calling-code text-[1.1rem] rounded-full cursor-pointer transition-all duration-300 text-center mb-12 max-w-xl"
          >
            Support the Beta
          </a>
        </motion.div>

          {/* Subtitle */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-5 mb-10 justify-center"
          >
            
            <div className="text-md font-calling-code text-neutral-300 border border-neutral-400 rounded-full px-4 py-1">
              Current Version: {post.id}
            </div>
          </motion.div> */}
          
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

export default HomeHero; 
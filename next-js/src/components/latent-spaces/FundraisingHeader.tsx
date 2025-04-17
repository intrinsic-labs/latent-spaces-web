"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const FundraisingHeader = () => {
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
    <section className="relative pt-8 md:pt-12 lg:py-12 overflow-hidden">
      <div ref={backgroundRef} className="absolute top-0 left-0 w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1 }}
          className="h-full w-full"
        >
          <Image 
            src="/images/fundraising.jpg" 
            alt="Latent Spaces background" 
            fill
            priority
            quality={100}
            className="z-0 object-cover opacity-40 saturate-0"
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
            Fundraising
          </motion.h1>
          
          {/* Version badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-5 mb-10 justify-center"
          >
            <div className="text-md font-calling-code text-neutral-300 border border-neutral-400 rounded-full px-4 py-1 bg-neutral-300/10 backdrop-blur-md">
              Campaign Status: LIVE
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FundraisingHeader; 
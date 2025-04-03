'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
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
    <section className="min-h-[60vh] flex flex-col justify-center items-center relative bg-ls-background overflow-hidden">
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
      <div className="relative z-10 text-center max-w-[800px] px-8 pt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image 
            src="/images/latent-spaces/logo-with-tagline.svg" 
            alt="Latent Spaces: A Loom Interface" 
            width={400} 
            height={200}
            priority
            className="w-full max-w-[325px] md:max-w-[400px] mx-auto mb-20"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a 
            href="#fundraising" 
            className="inline-block bg-ls-accent hover:bg-ls-accent/30 backdrop-blur-md border border-ls-accent hover:border-ls-accentLight text-white py-3 w-full max-w-[325px] md:max-w-[400px] font-calling-code text-[1.1rem] rounded-full cursor-pointer transition-all duration-300 text-center"
          >
            Support the Beta
          </a>
        </motion.div>
      </div>
    </section>
  );
} 
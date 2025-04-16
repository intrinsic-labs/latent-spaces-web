'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { discordInvite } from '@/lib/links';

export default function DiscordCTA() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ctaRef.current) {
        const sectionTop = ctaRef.current.getBoundingClientRect().top;
        const scrollFactor = 0.2;
        
        // We'll apply a subtle scale effect based on scroll position
        const scale = 1 + Math.max(0, Math.min(0.05, (window.innerHeight - sectionTop) / (window.innerHeight * 5)));
        ctaRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 px-8 bg-ls-background text-center">
      <div 
        ref={ctaRef} 
        className="max-w-[800px] mx-auto"
        style={{ 
          transition: 'transform 0.2s ease-out',
          transformOrigin: 'center center' 
        }}
      >
        <motion.h2 
          className="font-neue-montreal text-[3rem] mb-4 leading-[1] relative font-medium text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Join The Discord
        </motion.h2>
        <motion.p 
          className="font-cardo text-[1.3rem] leading-[1.6] tracking-[0.03rem] text-white mb-6 w-full max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Be part of the conversation and help shape the future of Latent Spaces.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a 
            href={discordInvite} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-ls-accent hover:bg-ls-accent/30 backdrop-blur-md border border-ls-accent hover:border-ls-accentLight text-white py-3 w-full max-w-[325px] md:max-w-[400px] font-calling-code text-[1.1rem] rounded-full cursor-pointer transition-all duration-300 text-center"
          >
            Accept Invite
          </a>
        </motion.div>
      </div>
    </section>
  );
} 
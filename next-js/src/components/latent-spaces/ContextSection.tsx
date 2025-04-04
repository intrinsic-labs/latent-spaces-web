'use client';

import { useRef, useEffect, useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import SectionContent from '../ui/SectionContent';
import AccentText from './AccentText';
import CodeChip from './CodeChip';

export default function ContextSection() {
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxBgRef.current) {
        const section = parallaxBgRef.current.parentElement;
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          const scrollFactor = 0.3;
          parallaxBgRef.current.style.transform = `translateY(${-sectionTop * scrollFactor}px)`;
        }
      }
      
      // Check if section is in viewport to trigger fade-in
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if ( !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case the section is already in viewport on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <section className="pb-6 pt-12 px-8 max-w-3xl mx-auto relative overflow-hidden" id="about">
      <div className="relative overflow-hidden">
        <div 
          ref={parallaxBgRef} 
          className="absolute top-0 left-0 w-full h-[120%] z-0 opacity-15"
        />
        <div 
          ref={sectionRef}
          className={`relative z-10 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <SectionTitle>Understand model behavior.<br />Don't assign it.</SectionTitle>
          <SectionContent>
            <p>
              Latent Spaces is the first mobile app designed from the ground up as a <CodeChip href="/blog/the-probable-beauty-of-llms">Loom interface</CodeChip> for language models, allowing you to see multiple possible continuations of the same prompt and explore any branch you choose.
            </p>
            <br />
            <p>
              Unlike standard chat interfaces that show only one path forward, Latent Spaces reveals the full spectrum of what language models can generate, empowering you to understand how they actually think. By making this tool available to everyone, we're enabling users to form their own perspectives about these models based on <b>direct observation</b>, rather than prepackaged narratives from commercial corporations.
            </p>
            <br />
            <AccentText>
              Intrinsic Labs is invested in facilitating widespread, deep understanding of AI behavior. Latent Spaces is our first big step in that direction.
            </AccentText>
          </SectionContent>
        </div>
      </div>
    </section>
  );
} 
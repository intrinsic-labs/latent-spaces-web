'use client';

import { useRef, useEffect, useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import SectionContent from '../ui/SectionContent';
import AccentText from './AccentText';
import CodeChip from './CodeChip';
import { ClickableImage, FullscreenImageModal } from '../ui/ClickableImage';

export default function ContextSection() {
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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

  useEffect(() => {
    // Prevent body scrolling when modal is open
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  return (
    <section className="pb-6 pt-8 md:pt-12 px-6 max-w-5xl mx-auto relative overflow-hidden" id="about">
      <FullscreenImageModal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        imageSrc={selectedImage.src} 
        alt={selectedImage.alt} 
      />
      <div className="relative overflow-hidden">
        <div 
          ref={parallaxBgRef} 
          className="absolute top-0 left-0 w-full h-[120%] z-0 opacity-15"
        />
        <div 
          ref={sectionRef}
          className={`relative z-10 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div>
            {/* <SectionTitle className="max-w-3xl mx-auto">Understand model behavior.<br />Don't assign it.</SectionTitle> */}

            {/* Vimeo embed */}
            <div className="mb-8 md:mb-12 w-full relative" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                src="https://player.vimeo.com/video/1075565642?h=0&autoplay=0&title=0&byline=0&portrait=0"
                className="absolute top-0 left-0 w-full h-full rounded-xl border border-white/10"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Latent Spaces Promo"
              ></iframe>
              {/* https://vimeo.com/1075565642?share=copy */}
            </div>

            <SectionTitle className="max-w-3xl mx-auto">Understand model behavior.<br />Don't assign it.</SectionTitle>

            <SectionContent className="max-w-3xl mx-auto">
              <p>
                Latent Spaces is the first mobile app designed from the ground up as a <CodeChip href="/blog/the-probable-beauty-of-llms">Loom interface</CodeChip> for language models, allowing you to see multiple possible continuations of the same prompt and explore any branch you choose.
              </p>
              <br />
              <p>
                Unlike standard chat interfaces that show only one path forward, Latent Spaces reveals the full spectrum of what language models can generate, empowering you to understand how they actually think. By making this tool available to everyone, we're enabling users to form their own perspectives about these models based on <b>direct observation</b>, rather than shrinkwrapped narratives from current AI apps.
              </p>
              <br />
              <AccentText>
                Intrinsic Labs is invested in facilitating widespread, deep understanding of AI behavior. Latent Spaces is our first big step in that direction.
              </AccentText>
            </SectionContent>
          </div>
          {/* TODO: Add images here */}
        </div>
      </div>
    </section>
  );
} 
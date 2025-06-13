'use client';

import { useRef, useEffect, useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import SectionContent from '../ui/SectionContent';
import AccentText from './AccentText';
import CodeChip from './CodeChip';
import { ClickableImage, FullscreenImageModal } from '../ui/ClickableImage';
import Link from 'next/link';
import { vimeoTeaser, blogProbableBeautyOfLLMs, loomInterface, devlog } from '@/lib/links';

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
        if (!isVisible) {
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
    <section className="pb-6 pt-4 md:pt-12 max-w-5xl mx-auto relative overflow-hidden" id="about">
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
            <div className="px-2">
              {/* Vimeo embed */}
              <div className="mb-8 md:mb-12 relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={vimeoTeaser}
                  className="absolute top-0 left-0 w-full h-full rounded-xl border border-white/10"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Latent Spaces Promo"
                ></iframe>
                {/* https://vimeo.com/1075565642?share=copy */}
              </div>
            </div>
            <div className="px-6 mx-auto max-w-3xl">
              <SectionTitle className="max-w-3xl">Understand model behavior.</SectionTitle>
            </div>

            <SectionContent className="max-w-3xl mx-auto px-6">
              {/*
              Latent Spaces is a brand new platform designed to help you unlock the full potential of large language models. With our intuitive interface, researchers, developers, and businesses can reap 10x the returns on every prompt while also gaining deep insights into how models actually think.

              Latent Spaces is a unified platform designed to help you understand and interact with large language models in an entirely new way. Rather than treating AI as just a helpful chatbot, we encourage users to explore the deeper potential of these models. For AI researchers, developers, and businesses, Latent Spaces simplifies complex AI tools and lets you control the parameters that shape how models think, all while providing intuitive, hands-on exploration.

              Current AI interfaces often reduce powerful models to harmless, honest, helpful chatbots that don't reflect the true nature of the models themselves. Latent Spaces goes beyond this limitation by giving users easy access to advanced model settings, facilitating deeper, more authentic interactions. We're building a platform that empowers you to explore, learn, and understand these models — not just what they can do for you, but how and why they do it.
              */}
              <p>
                Latent Spaces is a brand new platform designed to help you unlock the full potential of large language models. With our intuitive interface, researchers, developers, and businesses can reap <b>10x the returns</b> on every prompt while also gaining deep insights into <CodeChip href={blogProbableBeautyOfLLMs}>how models actually think.</CodeChip>
              </p>
              <br />
              {/* <h3 className="text-white text-2xl font-medium my-4">Why Latent Spaces?</h3> */}
              <p>
                Current AI interfaces often reduce powerful models to harmless, honest, helpful chatbots without reflecting the true nature of the mind behind the mask. We move beyond this limitation by giving users easy access to custom features and advanced model settings, facilitating deeper, more authentic interactions.
              </p>
              <br />
              <AccentText>
                We&apos;re building a platform that empowers you to explore, learn, and understand these models — not just what they can do, but how and why they do it.
              </AccentText>

              <Link
                href={loomInterface}
                className="inline-block bg-transparent hover:bg-ls-accent/30 backdrop-blur-md border border-ls-accentLight hover:border-ls-accentLight text-ls-accentLight hover:text-white py-3 w-full font-calling-code text-[1.1rem] rounded-full cursor-pointer transition-all duration-300 text-center mt-6"
              >
                What is a Loom Interface?
              </Link>

              <Link
                href={devlog}
                className="inline-block bg-transparent hover:bg-ls-accent/30 backdrop-blur-md border border-ls-accentLight hover:border-ls-accentLight text-ls-accentLight hover:text-white py-3 w-full font-calling-code text-[1.1rem] rounded-full cursor-pointer transition-all duration-300 text-center mt-6"
              >
                Check out the dev log
              </Link>
            </SectionContent>

          </div>
          {/* TODO: Add images here */}
        </div>
      </div>
    </section>
  );
} 
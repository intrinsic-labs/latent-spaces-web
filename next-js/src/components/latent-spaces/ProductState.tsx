'use client';

import { useRef, useEffect, useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import SectionContent from '../ui/SectionContent';
import AccentText from './AccentText';
import CodeChip from './CodeChip';
import { ClickableImage, FullscreenImageModal } from '../ui/ClickableImage';
import { vimeoTeaser } from '@/lib/links';

export default function ProductState() {
  const parallaxBgRef = useRef<HTMLDivElement>(null);
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
          const scrollFactor = 0.4; // Different speed for visual diversity
          parallaxBgRef.current.style.transform = `translateY(${-sectionTop * scrollFactor}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <section className="pt-6 md:pt-12 pb-16 md:pb-24 px-6 max-w-3xl mx-auto relative overflow-hidden">
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
        <div className="relative z-10">
          <SectionTitle id="product-state">04.16.2025</SectionTitle>
          <SectionContent>
            <p>
              Currently, Latent Spaces exists as a prototype iOS app. Model providers <CodeChip href="https://openrouter.ai/" target="_blank" rel="noopener noreferrer">OpenRouter</CodeChip> and <CodeChip href="https://www.anthropic.com/" target="_blank" rel="noopener noreferrer">Anthropic</CodeChip> are
              implemented, giving users access to over 300 models. Next in line is a web version, and then an Android native version.
            </p>
            <br />
            <AccentText color="text-white">
              The fundraiser aims to get the iOS app and web app ready for a public beta release.
            </AccentText>
            <div className="">
              {/* Vimeo embed */}
              <div className="mt-8 relative" style={{ paddingBottom: '56.25%' }}>
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
            <br />
            <div className="grid grid-cols-3 gap-4 w-full mb-6">
              <ClickableImage
                src="/images/latent-spaces/screenshots/splash.png"
                alt="Latent Spaces app screenshot"
                onClick={() => openModal("/images/latent-spaces/screenshots/splash.png", "Latent Spaces app screenshot")}
              />
              <ClickableImage
                src="/images/latent-spaces/screenshots/home.png"
                alt="Latent Spaces app screenshot"
                onClick={() => openModal("/images/latent-spaces/screenshots/home.png", "Latent Spaces app screenshot")}
              />
              <ClickableImage
                src="/images/latent-spaces/screenshots/continuations.png"
                alt="Latent Spaces app screenshot"
                onClick={() => openModal("/images/latent-spaces/screenshots/continuations.png", "Latent Spaces app screenshot")}
              />
            </div>
            <div className="grid grid-cols-3 gap-4 w-full">
              <ClickableImage
                src="/images/latent-spaces/screenshots/openloom-tree.png"
                alt="Latent Spaces app screenshot"
                onClick={() => openModal("/images/latent-spaces/screenshots/openloom-tree.png", "Latent Spaces app screenshot")}
              />
              <ClickableImage
                src="/images/latent-spaces/screenshots/node-info.png"
                alt="Latent Spaces app screenshot"
                onClick={() => openModal("/images/latent-spaces/screenshots/node-info.png", "Latent Spaces app screenshot")}
              />
              <ClickableImage
                src="/images/latent-spaces/screenshots/user-context.png"
                alt="Latent Spaces app screenshot"
                onClick={() => openModal("/images/latent-spaces/screenshots/user-context.png", "Latent Spaces app screenshot")}
              />
            </div>
            <br />
            <p>
              Alongside the mobile app, Intrinsic Labs is developing a protocol called <CodeChip href="/openloom">OpenLoom</CodeChip> that other loom interfaces may
              adopt to import/export trees in a standardized lossless format. Latent Spaces supports tree sharing via the
              OpenLoom format out of the box.
            </p>
            <br />
            <AccentText color="text-white">
              The fundrasier also enables a stable OpenLoom V1.0.
            </AccentText>
          </SectionContent>
        </div>
      </div>
    </section>
  );
} 
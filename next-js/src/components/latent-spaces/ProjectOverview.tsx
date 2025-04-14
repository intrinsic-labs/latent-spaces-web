'use client';

import { useRef, useEffect, useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import SectionContent from '../ui/SectionContent';
import AccentText from './AccentText';
import CodeChip from './CodeChip';
import { ClickableImage, FullscreenImageModal } from '../ui/ClickableImage';

export default function ProjectOverview() {
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
    <section className="py-12 px-8 max-w-3xl mx-auto relative overflow-hidden">
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
          <SectionTitle>The state of things</SectionTitle>
          <SectionContent>
            <p>
              Currently, Latent Spaces exists as a prototype iOS app. Model providers <CodeChip href="https://openrouter.ai/" target="_blank" rel="noopener noreferrer">OpenRouter</CodeChip> and <CodeChip href="https://www.anthropic.com/" target="_blank" rel="noopener noreferrer">Anthropic</CodeChip> are currently
              implemented, giving users access to over 300 models. Next in line is a web version, and then an Android version.
            </p>
            <br />
            <div className="grid grid-cols-3 gap-4 w-full">
              <ClickableImage
                src="/images/latent-spaces/screenshots/01.png"
                alt="Latent Spaces app screenshot"
                onClick={() => openModal("/images/latent-spaces/screenshots/01.png", "Latent Spaces app screenshot")}
              />
              <ClickableImage
                src="/images/latent-spaces/screenshots/05.png"
                alt="Latent Spaces app screenshot"
                onClick={() => openModal("/images/latent-spaces/screenshots/05.png", "Latent Spaces app screenshot")}
              />
              <ClickableImage
                src="/images/latent-spaces/screenshots/06.png"
                alt="Latent Spaces app screenshot"
                onClick={() => openModal("/images/latent-spaces/screenshots/06.png", "Latent Spaces app screenshot")}
              />
            </div>
            <div className="flex items-center justify-center pt-4 font-calling-code text-neutral-400 text-sm">click to expand</div>
            <br />
            <AccentText color="text-white">
              The fundrasier aims to get the iOS app and web app ready for a public beta release.
            </AccentText>
            <br />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              <ClickableImage
                src="/images/latent-spaces/screenshots/03.png"
                alt="Latent Spaces app screenshot"
                onClick={() => openModal("/images/latent-spaces/screenshots/03.png", "Latent Spaces app screenshot")}
              />
              <ClickableImage
                src="/images/latent-spaces/screenshots/04.png"
                alt="Latent Spaces app screenshot"
                onClick={() => openModal("/images/latent-spaces/screenshots/04.png", "Latent Spaces app screenshot")}
              />
              <ClickableImage
                src="/images/latent-spaces/screenshots/07.png"
                alt="Latent Spaces app screenshot"
                onClick={() => openModal("/images/latent-spaces/screenshots/07.png", "Latent Spaces app screenshot")}
              />
              <ClickableImage
                src="/images/latent-spaces/screenshots/08.png"
                alt="Latent Spaces app screenshot"
                onClick={() => openModal("/images/latent-spaces/screenshots/08.png", "Latent Spaces app screenshot")}
              />
            </div>
            <div className="flex items-center justify-center pt-4 font-calling-code text-neutral-400 text-sm">click to expand</div>
            <br />
            <p>
              Alongside the mobile app, Intrinsic Labs is developing a protocol called <CodeChip href="/openloom">OpenLoom</CodeChip> that other loom interfaces may
              adopt to import/export trees in a standardized lossless format. Latent Spaces supports tree sharing via the
              OpenLoom format out of the box.
            </p>
            <br />
            <AccentText color="text-white">
              The fundrasier also aims to get to a stable OpenLoom V1.0.
            </AccentText>
          </SectionContent>
        </div>
      </div>
    </section>
  );
} 
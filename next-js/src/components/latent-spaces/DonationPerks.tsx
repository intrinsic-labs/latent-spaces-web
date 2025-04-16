'use client';

import { useRef, useEffect } from 'react';
import SectionContent from '../ui/SectionContent';
import SectionTitle from '../ui/SectionTitle';

export default function DonationPerks() {
  const parallaxBgRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="py-6 md:py-12 px-6 max-w-5xl mx-auto relative overflow-hidden">
      <div className="relative overflow-hidden">
        <div
          ref={parallaxBgRef}
          className="absolute top-0 left-0 w-full h-[120%] z-0 opacity-15"
        />
        <div className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <SectionTitle id="perks">Perks</SectionTitle>
            <SectionContent className="mb-8">
              <p>
                Your support helps us continue building Latent Spaces into the best AI interface on the market. Every contribution unlocks exclusive perks designed for our community.
              </p>
              {/* <br />
              <ul className="list-disc pl-8 space-y-3">
                <li>
                  <span className="font-semibold">Exclusive Beta Features:</span> Early access to experimental models and features not yet available to the public.
                </li>
                <li>
                  <span className="font-semibold">Research Collaborations:</span> Opportunities to collaborate on research papers using Latent Spaces, with acknowledgment in publications.
                </li>
                <li>
                  <span className="font-semibold">Educational Webinars:</span> In-depth sessions explaining the mechanics of the loom interface and advanced AI exploration techniques.
                </li>
              </ul> */}
              <br />
            </SectionContent>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 md:p-8 transition-colors duration-300 hover:border-white/40">
              <h3 className="text-2xl mb-2 font-neue-montreal font-medium">Base Tier</h3>
              <p className="mb-4 font-calling-code text-lg">$5-$10/month or $25 one-time contribution</p>
              <ul className="list-disc pl-5 space-y-2 font-cardo tracking-wide text-lg">
                <li>Access to iOS alpha version of Latent Spaces</li>
                <li>Behind-the-scenes updates</li>
                <li>Name acknowledgment on our website</li>
                <li>Latent Spaces gel pen</li>
              </ul>
            </div>

            <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 md:p-8 transition-colors duration-300 hover:border-white/40">
              <h3 className="text-2xl mb-2 font-neue-montreal font-medium">Pro Tier</h3>
              <p className="mb-4 font-calling-code text-lg">$20-$75/month or $100 one-time contribution</p>
              <ul className="list-disc pl-5 space-y-2 font-cardo tracking-wide text-lg">
                <li>All Base Tier perks</li>
                <li>Exclusive Discord channels</li>
                <li>Early access to beta features</li>
                <li>Curated Loom Trees to import, explore, and expand</li>
                <li>Latent Spaces coffee mug</li>
              </ul>
            </div>

            <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 md:p-8 transition-colors duration-300 hover:border-white/40">
              <h3 className="text-2xl mb-2 font-neue-montreal font-medium">Elite Tier</h3>
              <p className="mb-4 font-calling-code text-lg">$100+/month or $250+ one-time contribution</p>
              <ul className="list-disc pl-5 space-y-2 font-cardo tracking-wide text-lg">
                <li>All Pro Tier perks</li>
                <li>Feature voting rights</li>
                <li>Educational sessions with the Latent Spaces team</li>
                <li>Research collaboration opportunities</li>
                <li>Latent Spaces t-shirt</li>
              </ul>
            </div>
          </div>

          {/* <div className="max-w-3xl mx-auto">
            <SectionContent className="mb-8">
              <ul className="space-y-3">
                <li>
                  <span className="font-semibold">Exclusive Beta Features:</span> Early access to experimental models and features not yet available to the public.
                </li>
                <li>
                  <span className="font-semibold">Research Collaborations:</span> Opportunities to collaborate on research papers using Latent Spaces, with acknowledgment in publications.
                </li>
                <li>
                  <span className="font-semibold">Educational Webinars:</span> In-depth sessions explaining the mechanics of the loom interface and advanced AI exploration techniques.
                </li>
              </ul>
              <br />
            </SectionContent>
          </div> */}

        </div>
      </div>
    </section>
  );
} 
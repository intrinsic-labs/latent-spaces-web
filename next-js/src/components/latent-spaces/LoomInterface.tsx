'use client';

import { useRef, useEffect } from 'react';
import SectionContent from '../ui/SectionContent';
import AccentText from './AccentText';
import CodeChip from './CodeChip';
import { blogProbableBeautyOfLLMs } from '@/lib/links';

export default function LoomInterface() {
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
    <section className="py-6 md:py-12 px-6 max-w-3xl mx-auto relative overflow-hidden">
      <div className="relative overflow-hidden">
        <div
          ref={parallaxBgRef}
          className="absolute top-0 left-0 w-full h-[120%] z-0 opacity-15"
        />
        <div className="relative z-10">
          {/* <SectionTitle id="loom">Loom</SectionTitle> */}
          <SectionContent className="mb-12">
            <p>
              <CodeChip href="/">Latent Spaces</CodeChip> is built from the ground up as a <b>Loom interface</b>. Put simply, a Loom lets you generate multiple responses to a single prompt and choose to continue from any or all of them.
            </p>
            <br />
            <h2 className="text-white text-2xl font-bold font-neue-montreal my-4">Why This Matters</h2>
            <p>
              When you talk to AI models like ChatGPT, Claude, or Gemini, you typically see just one response to your prompt. But behind that single response lies a vast multiverse of possibilities. Language models don't actually "decide" on one perfect answer—they calculate probabilities for millions of possible next words and then sample from that distribution to create a response.
            </p>
            <br />
            <AccentText color="text-accent">Generating and comparing multiple continuations of the same prompt gives you the power to explore this latent (hidden) multiverse.</AccentText>
            <br />
            <p>
              This type of exploration has two main benefits:
            </p>
            <ul className="list-decimal pl-8 pt-3 space-y-3">
              <li className="text-neutral-100">
                It gives you granular control over what the AI creates - you can pick the best generations inline and prune branches that veer off course.
              </li>
              <li className="text-neutral-100">
                Over time, you gain an intuition for how these models actually think. By studying multiple possible answers to the same prompt, you learn to more effectively steer the behavior of the AI.
              </li>
            </ul>
            <br />
            Loom takes its name in reference to the <b>Loom of Time</b>, a representation of the universe as a vast tapestry of possible futures where our choices weave potentials into realities. 
            <br />
            <br />
            For a more detailed exploration of the Loom interface, check out <CodeChip href={blogProbableBeautyOfLLMs}>The Probable Beauty of LLMs</CodeChip>.
          </SectionContent>
        </div>
      </div>
    </section>
  );
} 
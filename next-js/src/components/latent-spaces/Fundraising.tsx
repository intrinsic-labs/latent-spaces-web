'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import SectionContent from '../ui/SectionContent';
import { getFundingData } from '@/lib/stripe';
import { stripeOneTimeContribution, stripeSubscriptionTiers } from '@/lib/links';

interface FundraisingProps {
  className?: string;
  id?: string;
}

export default function Fundraising({ className, id }: FundraisingProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [fundingData, setFundingData] = useState({
    current: 0,
    goal: 9995,
    percentage: 0
  });
  const [showMonthlyOptions, setShowMonthlyOptions] = useState(false);
  const parallaxBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch funding data
    const loadFundingData = async () => {
      const data = await getFundingData();
      setFundingData(data);

      // Animate the progress bar after data is loaded
      setTimeout(() => {
        setAnimatedPercentage(data.percentage);
      }, 500);
    };

    loadFundingData();

    const handleScroll = () => {
      if (parallaxBgRef.current) {
        const section = parallaxBgRef.current.parentElement;
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          const scrollFactor = 0.2;
          parallaxBgRef.current.style.transform = `translateY(${-sectionTop * scrollFactor}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`max-w-5xl mx-auto relative overflow-hidden ${className}`} id={id}>
      <div className="relative">
        <div
          ref={parallaxBgRef}
          className="absolute top-0 left-0 w-full h-[120%] z-0 opacity-15"
        />
        <div className="relative z-10">


          <div className="bg-white/[0.03] border border-ls-accent/40 rounded-2xl p-6 pt-8 md:p-8 my-8 mb-16 mx-4 shadow-[0_0_15px_rgba(255,255,255,0.1)] box-shadow-lg">
            <SectionTitle>Beta Fundraiser</SectionTitle>
            <SectionContent>
              Your support will directly fund development of Latent Spaces and the OpenLoom protocol. We&apos;re building this from the ground up to be open, exploratory, and useful to everyone. If you believe in this mission, you can help achieve it faster.
            </SectionContent>

            <div className="my-12">
              <div className="flex justify-between mb-2 text-base font-calling-code">
                <span>${fundingData.current.toLocaleString()} raised</span>
                <span>Goal: ${fundingData.goal.toLocaleString()}</span>
              </div>
              <div className="h-2 bg-white/10 rounded overflow-hidden mb-4">
                <motion.div
                  className="h-full bg-gradient-to-r from-ls-accentLight to-ls-accent rounded"
                  initial={{ width: '0%' }}
                  animate={{ width: `${animatedPercentage}%` }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </div>
              <div className="flex justify-between mb-2 text-base font-calling-code">
                <span>{fundingData.percentage.toFixed(1)}% funded</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 md:p-8 transition-colors duration-300 hover:border-white/40">
                <h3 className="text-2xl mb-4 font-neue-montreal font-medium">One-Time Contribution</h3>
                <p>Support development with a single contribution.</p>
                <div className="mt-6">
                  <a
                    href={stripeOneTimeContribution}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-ls-yellow hover:bg-ls-yellow/30 backdrop-blur-md border border-ls-yellow hover:border-ls-yellowLight text-white py-3 px-6 font-calling-code text-[0.95rem] rounded-full cursor-pointer transition-all duration-300 text-center"
                  >
                    Contribute Now
                  </a>
                </div>
              </div>
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 md:p-8 transition-colors duration-300 hover:border-white/40">
                {!showMonthlyOptions ? (
                  <>
                    <h3 className="text-2xl mb-4 font-neue-montreal font-medium">Monthly Support</h3>
                    <p>Become a regular supporter for continuous development.</p>
                    <div className="mt-6">
                      <button
                        onClick={() => setShowMonthlyOptions(true)}
                        className="inline-block w-full bg-ls-yellow hover:bg-ls-yellow/30 backdrop-blur-md border border-ls-yellow hover:border-ls-yellowLight text-white py-3 px-6 font-calling-code text-[0.95rem] rounded-full cursor-pointer transition-all duration-300 text-center"
                      >
                        Support Monthly
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="relative">
                    <div className="absolute top-0 right-0">
                      <button 
                        onClick={() => setShowMonthlyOptions(false)}
                        className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                        aria-label="Go back"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                      </button>
                    </div>
                    <h3 className="text-2xl mb-4 font-neue-montreal font-medium">Select an amount</h3>
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      {stripeSubscriptionTiers.map((tier) => (
                        <a
                          key={tier.id}
                          href={tier.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center justify-center p-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl transition-colors duration-200 text-center"
                        >
                          <span className="font-calling-code text-lg font-semibold">${tier.amount}</span>
                          <span className="text-xs opacity-80">per month</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
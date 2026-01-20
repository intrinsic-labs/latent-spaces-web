'use client';

import { useState, useRef, useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (answerRef.current) {
      setHeight(answerRef.current.scrollHeight);
    }
  }, [answer, isOpen]);

  return (
    <div className="border-b border-white/10 py-6 last:border-b-0">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className={`font-cardo text-[1.25rem] ${isOpen ? 'text-ls-accentLight' : 'text-white'} font-normal`}>{question}</h3>
        <div className="ml-4 flex-shrink-0 relative w-6 h-6">
          <span className={`absolute top-1/2 left-0 w-full h-0.5 ${isOpen ? 'bg-ls-accentLight' : 'bg-white'} transform -translate-y-1/2 transition-transform duration-300 ${isOpen ? 'rotate-0' : ''}`}></span>
          <span className={`absolute top-1/2 left-0 w-full h-0.5 ${isOpen ? 'bg-ls-accentLight' : 'bg-white'} transform -translate-y-1/2 transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-90'}`}></span>
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div ref={answerRef} className="pt-4 pb-2 text-white font-inter text-[1rem] leading-[1.7]">
          {answer}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "What is Latent Spaces?",
    answer: "Latent Spaces is an app being developed for iOS, Android, and web that allows you to explore and pursue the many possible continuations of any prompt (making it a Loom interface), with a focus on understanding how language models actually work."
  },
  {
    question: "Who is Latent Spaces for?",
    answer: "Latent Spaces is for anyone wishing to understand LLMs on a deeper level. It aims to make some currently hard-to-find features and information accessible and easy to take advantage of."
  },
  {
    question: "Where can I get the app?",
    answer: "Lol we are cranking it out as fast as we can. Stay up to date on the Development page - a public release will be available in 2026."
  },
  {
    question: "Is Latent Spaces open source?",
    answer: "Latent Spaces is currently proprietary, but the OpenLoom protocol is open source and can be used by other apps - in fact, that's the whole point! Read more on the OpenLoom page."
  },
  {
    question: "Is Latent Spaces free?",
    answer: "Latent Spaces is free to use and will remain so. It currently requires you to bring your own API keys to talk to models. This means you'll need to pay for your own API usage based on the pricing of providers. In the future, Latent Spaces will likely introduce an optional subscription model for users who don't want to use custom keys, as well as offer access to some planned features that would cause us to incur costs."
  },
];

export default function FAQ() {
  const parallaxBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <section className="px-2 pb-12 max-w-3xl mx-auto relative overflow-hidden" id="faq">
      <div className="relative overflow-hidden">
        <div 
          ref={parallaxBgRef} 
          className="absolute top-0 left-0 w-full h-[120%] z-0 opacity-15"
        />
        <div className="relative z-10">
          <SectionTitle className="ml-4">FAQ</SectionTitle>

          <div className="bg-white/[0.03] rounded-xl p-6 md:p-8 mx-2">
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
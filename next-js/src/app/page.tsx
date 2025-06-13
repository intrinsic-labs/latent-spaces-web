'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Hero from '../components/latent-spaces/Hero';
import HomeHero from '../components/latent-spaces/HomeHero';
import ContextSection from '../components/latent-spaces/ContextSection';
import LoomInterface from '../components/latent-spaces/LoomInterface';
import Fundraising from '../components/latent-spaces/Fundraising';
import FAQ from '../components/latent-spaces/FAQ';
import DiscordCTA from '../components/latent-spaces/DiscordCTA';
import { useTheme } from '../components/ThemeProvider';
import SectionContent from '../components/ui/SectionContent';
import CodeChip from '../components/latent-spaces/CodeChip';
import { devlog, loomInterface } from '@/lib/links';
import Link from 'next/link';

export default function LatentSpacesPage() {
  const { setDarkTheme } = useTheme();

  // Set dark theme when component mounts and reset on unmount
  useEffect(() => {
    setDarkTheme(true);
    // Clean up function to reset theme when navigating away
    return () => setDarkTheme(false);
  }, [setDarkTheme]);

  return (
    <motion.main 
      className="min-h-screen bg-ls-background text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HomeHero />
      <ContextSection />
      {/* <Fundraising className="pt-12" /> */}
      <DiscordCTA />
    </motion.main>
  );
} 
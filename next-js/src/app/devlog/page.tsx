'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import DevlogHeader from '../../components/latent-spaces/DevlogHeader';
import ProductState from '../../components/latent-spaces/ProductState';
import { useTheme } from '../../components/ThemeProvider';
import FeatureList from '../../components/latent-spaces/FeatureList';
import DiscordCTA from '../../components/latent-spaces/DiscordCTA';
export default function DevlogPage() {
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
      <DevlogHeader />
      <ProductState />
      <FeatureList />
      <DiscordCTA />
    </motion.main>
  );
} 
'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import LoomInterfaceHeader from '../../components/latent-spaces/LoomInterfaceHeader';
import ProjectOverview from '../../components/latent-spaces/LoomInterface';
import { useTheme } from '../../components/ThemeProvider';

export default function HowItWorksPage() {
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
      <LoomInterfaceHeader />
      <ProjectOverview />
    </motion.main>
  );
} 
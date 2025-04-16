'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import FundraisingHeader from '../../components/latent-spaces/FundraisingHeader';
import Fundraising from '../../components/latent-spaces/Fundraising';
import { useTheme } from '../../components/ThemeProvider';
import FAQ from '../../components/latent-spaces/FAQ';
import DonationPerks from '../../components/latent-spaces/DonationPerks';

export default function FundraisingPage() {
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
      <FundraisingHeader />
      <Fundraising className="lg:pt-12" id="cta"/>
      <DonationPerks />
      <FAQ />
    </motion.main>
  );
} 
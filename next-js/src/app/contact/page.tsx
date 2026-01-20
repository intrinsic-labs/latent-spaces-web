'use client';

import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm as useFormspree } from '@formspree/react';
import { useEffect, useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import FAQ from '@/components/latent-spaces/FAQ';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { setDarkTheme } = useTheme();
  const [formState, submitForm] = useFormspree('xanepjnp');
  const [submitted, setSubmitted] = useState(false);

  // Set dark theme when component mounts
  useEffect(() => {
    setDarkTheme(true);
    // Clean up function to reset theme when navigating away
    return () => setDarkTheme(false);
  }, [setDarkTheme]);
  
  const { 
    register, 
    handleSubmit,
    reset,
    formState: { errors, isSubmitting } 
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    await submitForm(data);
    reset();
    setSubmitted(true);
  };

  return (
    <motion.main
      className="min-h-screen bg-ls-background text-white relative py-32" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <h1 className="text-6xl font-medium font-neue-montreal mb-12 text-center">Get In Touch</h1>
        <p className="text-center font-cardo text-2xl max-w-xl mx-auto mb-12">We&apos;d love to hear from you. Whether you have a question, a suggestion, or just want to say hello, don&apos;t hesitate to reach out! Check out the FAQs below.</p>
        
        <div className="max-w-lg mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center p-8 bg-accent/10 rounded-2xl"
            >
              <h3 className="text-2xl font-neue-montreal font-medium mb-4">Thank you!</h3>
              <p className="mb-6">Your message has been sent. We'll get back to you as soon as possible.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="bg-accent text-white py-2 px-6 rounded-lg hover:bg-accent-600 transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ls-accent"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-orange">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ls-accent"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-orange">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={6}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ls-accent"
                  placeholder="How can we help you?"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-orange">{errors.message.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || formState.submitting}
                className="w-full py-3 bg-ls-accent text-white rounded-full hover:bg-accent transition-colors disabled:opacity-70"
              >
                {isSubmitting || formState.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
      <div className='mt-20 max-w-xl mx-auto'>
        <FAQ />
      </div>
    </motion.main>
  );
} 
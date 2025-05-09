import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { ThemeProvider } from '../components/ThemeProvider';
import ClientThemeBackground from '../components/ClientThemeBackground';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Latent Spaces | Intrinsic Labs',
  description: 'Latent Spaces - A Loom Interface',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <ClientThemeBackground>
          <Navigation />
          {children}
          <Footer />
        </ClientThemeBackground>
        <Analytics />
      </ThemeProvider>
    </html>
  );
}
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OpenLoom | Latent Spaces',
  description: 'Open-source implementation of the Loom protocol',
  openGraph: {
    title: 'OpenLoom | Latent Spaces',
    description: 'Open-source implementation of the Loom protocol',
  },
};

export default function OpenLoomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
} 
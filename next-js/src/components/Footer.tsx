"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FiInstagram } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      // { name: 'Contribute Now', href: '/fundraising' },
      { name: 'OpenLoom', href: '/openloom' },
      { name: 'Development', href: '/devlog' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Mobile Development', href: '/services/mobile' },
      { name: 'Web Development', href: '/services/web' },
      { name: 'Custom Software', href: '/services/custom' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/work/case-studies' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  const socialLinks = [
    { name: 'X', href: 'https://twitter.com/intrinsic_labs', icon: <FaXTwitter size={20} /> },
    { name: 'Instagram', href: 'https://instagram.com/intrinsiclabs', icon: <FiInstagram size={20} /> },
  ];

  return (
    <footer className="bg-black/90 pt-16 pb-16 md:px-8 relative">
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {/* Brand Column */}
          <div>
            {/* <Image 
              src="/images/logo/new/horizontal_white.svg" 
              alt="Intrinsic Labs Logo" 
              width={196}
              height={80}
              className="mb-6"
            /> */}
            <div className="logo-text text-2xl mb-4 text-secondary font-neue-montreal font-bold">
              Latent Spaces
            </div>
            <div className="text-neutral-500 text-sm mb-4">
              Made with ❤️ by <a href="https://intrinsiclabs.co" className="hover:text-accent transition-colors">Intrinsic Labs LLC</a>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-accent transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-secondary pt-8 md:pt-0 text-md font-semibold mb-4 uppercase tracking-wider">Jump To:</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 hover:text-accent transition-colors text-md tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div> 

        {/* Bottom Section */}
        <div className="pt-8 border-t border-neutral-600/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-600 text-xs mb-4 md:mb-0 font-mono">
            &copy; {currentYear} Intrinsic Labs LLC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* <Link href="/privacy" className="text-neutral-600 hover:text-accent text-xs font-mono">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-600 hover:text-accent text-xs font-mono">
              Terms of Service
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
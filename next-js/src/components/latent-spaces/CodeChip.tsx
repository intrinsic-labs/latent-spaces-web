import React from 'react';

interface CodeChipProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  size?: 'small' | 'large';
}

export default function CodeChip({ children, size = 'small', href, target = '', rel = '' }: CodeChipProps) {
    const sizeClass = size === 'small' ? 'text-[0.95em]' : 'text-[1.25em]';
    return (
        <a href={href} 
        target={target}
        rel={rel}
        className={`font-calling-code text-ls-yellowLight hover:bg-ls-yellow hover:text-white transition-all duration-300 ${sizeClass} bg-ls-yellowLight/10 px-[0.3em] py-[0.1em] rounded`}>
            {children}
        </a>
    )
}
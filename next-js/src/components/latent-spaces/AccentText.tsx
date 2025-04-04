import React from 'react';

interface AccentTextProps {
  children: React.ReactNode;
  color?: string;
}

export default function AccentText({ children, color = 'text-ls-accentLight' }: AccentTextProps) {
 return (
    <p className={`font-neue-montreal font-medium text-[2rem] leading-[1.2] ${color}`}>
      {children}
    </p>
  );
}
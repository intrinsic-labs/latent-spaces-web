import React from 'react';

interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionContent({ children, className }: SectionContentProps) {
  return (
    <div className={`font-cardo text-[1.3rem] leading-[1.6] tracking-[0.02rem] text-white ${className}`}>
      {children}
    </div>
  );
} 
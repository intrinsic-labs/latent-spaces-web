"use client";

import PageHero from '../ui/PageHero';

interface BlogHeroProps {
  note?: string;
}

const BlogHero = ({ note }: BlogHeroProps) => {
  return (
    <div className="flex flex-col gap-4">
    <PageHero
      title="Researching\nat the frontier"
      description="At Intrinsic Labs, we develop innovative software solutions, and our research helps us create safer, more intuitive, and more reliable applications."
      bottomPadding={false}
    />
    {note && <h2 className="text-2xl font-bold mx-auto">{note}</h2>}
    </div>
  );
};

export default BlogHero; 
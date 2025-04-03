"use client";

import PageHero from '../ui/PageHero';

interface BlogHeroProps {
  note?: string;
}

const BlogHero = ({ note }: BlogHeroProps) => {
  return (
    <div className="flex flex-col gap-4">
    <PageHero
      title="Understanding AI"
      description="Intrinsic Labs is invested in facilitating widespread, deep comprehension of AI behavior."
      bottomPadding={false}
    />
    {note && <h2 className="text-2xl font-bold mx-auto">{note}</h2>}
    </div>
  );
};

export default BlogHero; 
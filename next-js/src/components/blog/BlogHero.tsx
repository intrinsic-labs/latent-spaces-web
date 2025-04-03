"use client";

import PageHero from '../ui/PageHero';

interface BlogHeroProps {
  note?: string;
}

const BlogHero = ({ note }: BlogHeroProps) => {
  return (
    <div className="flex flex-col gap-4">
    <PageHero
      title="Exploring AI"
      description="The Latent Spaces team is invested in facilitating widespread, deep understanding of AI behavior."
      bottomPadding={false}
    />
    {note && <h2 className="text-2xl font-bold mx-auto">{note}</h2>}
    </div>
  );
};

export default BlogHero; 
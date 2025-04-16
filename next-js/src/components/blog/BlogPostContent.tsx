"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';

interface BlogPostContentProps {
  post: BlogPost;
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch with syntax highlighting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="animate-pulse space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-neutral-800/50 rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-4 md:pt-8 pb-16 font-cardo text-[1.2rem] leading-[1.8] tracking-[0.01rem]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="">
            <ReactMarkdown
              components={{
                // Custom rendering for code blocks with syntax highlighting
                code({ node, inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <div className="overflow-hidden rounded-xl my-6">
                      <SyntaxHighlighter
                        style={vscDarkPlus as any}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{ borderRadius: '1rem', margin: 0 }}
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    </div>
                  ) : (
                    <code className="bg-neutral-300 text-neutral-800 rounded px-1.5 py-0.5 font-calling-code text-[1rem]" {...props}>
                      {children}
                    </code>
                  );
                },
                // Custom rendering for headings with anchor links
                h1: ({ node, ...props }: any) => (
                  <h1 className="text-3xl font-neue-montreal font-bold mt-12 mb-6 text-primary" {...props} />
                ),
                h2: ({ node, ...props }: any) => (
                  <h2 className="text-2xl font-neue-montreal font-bold mt-10 mb-4 text-primary" {...props} />
                ),
                h3: ({ node, ...props }: any) => (
                  <h3 className="text-xl font-neue-montreal font-bold mt-8 mb-4 text-primary" {...props} />
                ),
                p: ({ node, ...props }: any) => (
                  <p className="text-primary leading-relaxed mb-6" {...props} />
                ),
                ul: ({ node, ...props }: any) => (
                  <ul className="list-disc pl-6 mb-6 text-primary" {...props} />
                ),
                ol: ({ node, ...props }: any) => (
                  <ol className="list-decimal pl-6 mb-6 text-primary" {...props} />
                ),
                li: ({ node, ...props }: any) => (
                  <li className="mb-2 text-primary" {...props} />
                ),
                a: ({ node, ...props }: any) => (
                  <a className="text-primary hover:text-primary/80 underline transition-colors duration-300" {...props} />
                ),
                blockquote: ({ node, ...props }: any) => (
                  <blockquote className="border-l-4 border-primary/30 pl-4 italic text-primary my-6" {...props} />
                ),
                img: ({ node, ...props }: any) => (
                  <img className="rounded-lg my-8 w-full" {...props} />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
          
          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-neutral-800/50">
            <h3 className="text-md font-neue-montreal font-medium mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Link 
                  key={index} 
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="font-calling-code text-sm px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-orange hover:text-secondary transition-colors duration-300"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Share */}
          <div className="mt-12">
            <h3 className="text-md font-neue-montreal font-medium mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <button 
                onClick={() => {
                  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&hashtag=%23latentspaces`, '_blank');
                }}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-accent hover:text-secondary transition-colors duration-300"
                aria-label="Share on Facebook"
              >
                <FaFacebookF />
              </button>
              <button 
                onClick={() => {
                  window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`${post.title} - Check out this article`)}&hashtags=latentspaces`, '_blank');
                }}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-accent hover:text-secondary transition-colors duration-300"
                aria-label="Share on X"
              >
                <FaXTwitter />
              </button>
              <button 
                onClick={() => {
                  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt || post.title)}`, '_blank');
                }}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-accent hover:text-secondary transition-colors duration-300"
                aria-label="Share on LinkedIn"
              >
                <FaLinkedinIn />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Add Link component for tags
import Link from 'next/link';

export default BlogPostContent; 
import { Metadata } from "next";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostContent from "@/components/blog/BlogPostContent";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { getBlogPost, getRelatedPosts, getAllPostSlugs } from "@/lib/blog";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  return {
    title: `${post.title} | Intrinsic Labs Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  const relatedPosts = await getRelatedPosts(slug);

  return (
    <main className="min-h-screen">
      <BlogPostHeader post={post} />
      <BlogPostContent post={post} />
      <RelatedPosts posts={relatedPosts} />
    </main>
  );
}

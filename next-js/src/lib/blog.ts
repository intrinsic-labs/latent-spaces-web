import { client } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import {
  ALL_POSTS_QUERY,
  FEATURED_POSTS_QUERY,
  SINGLE_POST_QUERY,
  RELATED_POSTS_QUERY,
  RECENT_POSTS_QUERY,
  ALL_CATEGORIES_QUERY,
  ALL_TAGS_QUERY,
  ALL_POST_SLUGS_QUERY,
} from "@/sanity/queries";
import type {
  ALL_POSTS_QUERY_RESULT,
  FEATURED_POSTS_QUERY_RESULT,
  SINGLE_POST_QUERY_RESULT,
  RELATED_POSTS_QUERY_RESULT,
  RECENT_POSTS_QUERY_RESULT,
  ALL_CATEGORIES_QUERY_RESULT,
  ALL_TAGS_QUERY_RESULT,
  ALL_POST_SLUGS_QUERY_RESULT,
} from "@/sanity/sanity.types";

// ISR configuration - revalidate every 5 mins (fallback)
const REVALIDATE_TIME = 300;

// Types for blog data (transformed from Sanity types)
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

/**
 * Transform Sanity post data to BlogPost format
 */
function transformPost(post: ALL_POSTS_QUERY_RESULT[number]): BlogPost {
  return {
    id: post._id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: urlForImage(post.coverImage) ?? "",
    author: {
      name: post.author.name,
      avatar: urlForImage(post.author.avatar) ?? "",
    },
    date: new Date(post.publishedAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    readingTime:
      post.readingTime || `${Math.ceil(post.content.length / 1000)} min read`,
    category: post.category,
    tags: post.tags,
    featured: post.featured || false,
  };
}

/**
 * Get all blog posts
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts = await client.fetch<ALL_POSTS_QUERY_RESULT>(
    ALL_POSTS_QUERY,
    {},
    {
      next: {
        revalidate: REVALIDATE_TIME,
        tags: ["posts"],
      },
    },
  );

  return posts.map(transformPost);
}

/**
 * Get featured blog posts
 */
export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  const posts = await client.fetch<FEATURED_POSTS_QUERY_RESULT>(
    FEATURED_POSTS_QUERY,
    {},
    {
      next: {
        revalidate: REVALIDATE_TIME,
        tags: ["posts", "featured-posts"],
      },
    },
  );

  return posts.map(transformPost);
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost> {
  const post = await client.fetch<SINGLE_POST_QUERY_RESULT>(
    SINGLE_POST_QUERY,
    { slug },
    {
      next: {
        revalidate: REVALIDATE_TIME,
        tags: ["posts", `post-${slug}`],
      },
    },
  );

  if (!post) {
    throw new Error(`Blog post with slug "${slug}" not found`);
  }

  return transformPost(post);
}

/**
 * Get related blog posts
 */
export async function getRelatedPosts(
  slug: string,
  limit: number = 3,
): Promise<BlogPost[]> {
  // First get the current post to access its category and tags
  const currentPost = await getBlogPost(slug);

  // Get related posts by category or matching tags
  const relatedPosts = await client.fetch<RELATED_POSTS_QUERY_RESULT>(
    RELATED_POSTS_QUERY,
    {
      slug: slug,
      category: currentPost.category,
      tags: currentPost.tags,
    },
    {
      next: {
        revalidate: REVALIDATE_TIME,
        tags: ["posts"],
      },
    },
  );

  let posts = relatedPosts.map(transformPost);

  // If we don't have enough related posts, add recent posts
  if (posts.length < limit) {
    const existingIds = posts.map((post) => post.id);

    const recentPosts = await client.fetch<RECENT_POSTS_QUERY_RESULT>(
      RECENT_POSTS_QUERY,
      {
        slug: slug,
        existingIds: existingIds,
      },
      {
        next: {
          revalidate: REVALIDATE_TIME,
          tags: ["posts"],
        },
      },
    );

    const recentPostsMapped = recentPosts.map(transformPost);
    posts = [...posts, ...recentPostsMapped.slice(0, limit - posts.length)];
  }

  return posts.slice(0, limit);
}

/**
 * Get all unique categories
 */
export async function getAllCategories(): Promise<string[]> {
  const categories = await client.fetch<ALL_CATEGORIES_QUERY_RESULT>(
    ALL_CATEGORIES_QUERY,
    {},
    {
      next: {
        revalidate: REVALIDATE_TIME,
        tags: ["posts", "categories"],
      },
    },
  );

  return categories;
}

/**
 * Get all unique tags
 */
export async function getAllTags(): Promise<string[]> {
  const tags = await client.fetch<ALL_TAGS_QUERY_RESULT>(
    ALL_TAGS_QUERY,
    {},
    {
      next: {
        revalidate: REVALIDATE_TIME,
        tags: ["posts", "tags"],
      },
    },
  );

  return tags;
}

/**
 * Get all post slugs (for generateStaticParams)
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await client.fetch<ALL_POST_SLUGS_QUERY_RESULT>(
    ALL_POST_SLUGS_QUERY,
    {},
    {
      next: {
        revalidate: REVALIDATE_TIME,
        tags: ["posts"],
      },
    },
  );

  return posts.map((post) => post.slug);
}

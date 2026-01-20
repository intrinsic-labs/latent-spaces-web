import {
  getAllBlogPosts,
  getFeaturedBlogPosts,
  getAllCategories,
  getAllTags,
} from "@/lib/blog";
import BlogPageContent from "@/components/blog/BlogPageContent";

export const metadata = {
  title: "Blog | Intrinsic Labs",
  description: "Insights and updates from the Intrinsic Labs team",
};

export default async function BlogPage() {
  // Fetch all data server-side in parallel
  const [posts, featuredPosts, categories, tags] = await Promise.all([
    getAllBlogPosts(),
    getFeaturedBlogPosts(),
    getAllCategories(),
    getAllTags(),
  ]);

  // Get the first featured post (or null if none exist)
  const featuredPost = featuredPosts[0] || null;

  return (
    <BlogPageContent
      posts={posts}
      featuredPost={featuredPost}
      categories={categories}
      tags={tags}
    />
  );
}

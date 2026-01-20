import { defineQuery } from "groq";

/**
 * Centralized GROQ queries for the blog
 * Using defineQuery for automatic type generation via Sanity TypeGen
 */

// Query for all blog posts (for listing page)
export const ALL_POSTS_QUERY = defineQuery(`*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc){
  _id,
  title,
  excerpt,
  content,
  "slug": slug.current,
  coverImage,
  "author": {
    "name": author->name,
    "avatar": author->avatar
  },
  publishedAt,
  readingTime,
  category,
  tags,
  featured
}`);

// Query for featured blog posts
export const FEATURED_POSTS_QUERY = defineQuery(`*[
  _type == "post"
  && defined(slug.current)
  && featured == true
]|order(publishedAt desc){
  _id,
  title,
  excerpt,
  content,
  "slug": slug.current,
  coverImage,
  "author": {
    "name": author->name,
    "avatar": author->avatar
  },
  publishedAt,
  readingTime,
  category,
  tags,
  featured
}`);

// Query for a single blog post by slug
export const SINGLE_POST_QUERY = defineQuery(`*[
  _type == "post"
  && slug.current == $slug
][0]{
  _id,
  title,
  excerpt,
  content,
  "slug": slug.current,
  coverImage,
  "author": {
    "name": author->name,
    "avatar": author->avatar
  },
  publishedAt,
  readingTime,
  category,
  tags,
  featured
}`);

// Query for related posts by category and tags
export const RELATED_POSTS_QUERY = defineQuery(`*[
  _type == "post"
  && slug.current != $slug
  && (category == $category || count((tags)[@ in $tags]) > 0)
]|order(publishedAt desc)[0...3]{
  _id,
  title,
  excerpt,
  content,
  "slug": slug.current,
  coverImage,
  "author": {
    "name": author->name,
    "avatar": author->avatar
  },
  publishedAt,
  readingTime,
  category,
  tags,
  featured
}`);

// Query for recent posts (fallback for related posts)
export const RECENT_POSTS_QUERY = defineQuery(`*[
  _type == "post"
  && slug.current != $slug
  && !(_id in $existingIds)
]|order(publishedAt desc)[0...3]{
  _id,
  title,
  excerpt,
  content,
  "slug": slug.current,
  coverImage,
  "author": {
    "name": author->name,
    "avatar": author->avatar
  },
  publishedAt,
  readingTime,
  category,
  tags,
  featured
}`);

// Query for posts by category
export const POSTS_BY_CATEGORY_QUERY = defineQuery(`*[
  _type == "post"
  && defined(slug.current)
  && category == $category
]|order(publishedAt desc){
  _id,
  title,
  excerpt,
  content,
  "slug": slug.current,
  coverImage,
  "author": {
    "name": author->name,
    "avatar": author->avatar
  },
  publishedAt,
  readingTime,
  category,
  tags,
  featured
}`);

// Query for posts by tag
export const POSTS_BY_TAG_QUERY = defineQuery(`*[
  _type == "post"
  && defined(slug.current)
  && $tagName in tags
]|order(publishedAt desc){
  _id,
  title,
  excerpt,
  content,
  "slug": slug.current,
  coverImage,
  "author": {
    "name": author->name,
    "avatar": author->avatar
  },
  publishedAt,
  readingTime,
  category,
  tags,
  featured
}`);

// Query for all unique categories
export const ALL_CATEGORIES_QUERY = defineQuery(`array::unique(*[
  _type == "post"
  && defined(category)
].category)`);

// Query for all unique tags
export const ALL_TAGS_QUERY = defineQuery(`array::unique(*[
  _type == "post"
  && defined(tags)
].tags[])`);

// Query for searching posts
export const SEARCH_POSTS_QUERY = defineQuery(`*[
  _type == "post"
  && defined(slug.current)
  && (
    title match $searchPattern ||
    excerpt match $searchPattern ||
    content match $searchPattern ||
    category match $searchPattern
  )
]|order(publishedAt desc){
  _id,
  title,
  excerpt,
  content,
  "slug": slug.current,
  coverImage,
  "author": {
    "name": author->name,
    "avatar": author->avatar
  },
  publishedAt,
  readingTime,
  category,
  tags,
  featured
}`);

// Query for all post slugs (for generateStaticParams)
export const ALL_POST_SLUGS_QUERY = defineQuery(`*[
  _type == "post"
  && defined(slug.current)
]{"slug": slug.current}`);

import { defineQuery } from "groq";

// Test query to verify TypeGen is working
export const TEST_QUERY = defineQuery(`*[_type == "post"][0]{
  _id,
  title,
  "slug": slug.current
}`);

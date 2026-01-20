import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "99z2orps",
    dataset: "production",
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,

  /**
   * TypeGen configuration for generating types from schema and GROQ queries
   * Generates types for the Next.js application
   */
  typegen: {
    // Path to scan for GROQ queries in the Next.js app (relative to cms folder)
    path: "../next-js/src/**/*.{ts,tsx}",
    // Path to the extracted schema file
    schema: "./schema.json",
    // Output path for generated TypeScript types in the Next.js app
    generates: "../next-js/src/sanity/sanity.types.ts",
    // Enable automatic type inference for Sanity client methods
    overloadClientMethods: true,
  },
});

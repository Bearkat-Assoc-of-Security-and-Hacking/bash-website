// docs/next.config.mjs

import nextra from "nextra";

const isProduction = process.env.NODE_ENV === "production";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

// Give the configuration object a name
const nextConfig = {
  ...withNextra(),
  // The important settings for GitHub Pages are below:

  // 1. Export as a static site
  output: "export",

  // 2. Set the base path for the site
  // IMPORTANT: This should start with a forward slash and be ONLY the repo name.
  basePath: isProduction ? "/bash-website" : "",

  // 3. Disable image optimization (required for static export)
  images: {
    unoptimized: true,
  },
};

// Export the named object as the default
export default nextConfig;

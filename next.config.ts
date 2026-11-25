// https://github.com/nextjs/deploy-github-pages
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output to 'out' folder for GitHub Pages
  output: "export",
  // basePath: "/diyoga",
  // distDir: "diyoga",
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Add trailing slashes for clean URLs
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

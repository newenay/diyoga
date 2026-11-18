// https://github.com/nextjs/deploy-github-pages

import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // 'out' by default, static export for GitHub Pages
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
  // basePath: isProd ? "/diyoga" : "",
  // assetPrefix: isProd ? "/diyoga" : "",
  // builds files '.next' by default
  // distDir: "diyoga",
  images: {
    unoptimized: true,
  },
  experimental: {
    agentFeedback: true,
  },
  // PPR Disabled for static export option
  // cacheComponents: true,
  // partialPrefetching: true,
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

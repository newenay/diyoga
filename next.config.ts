import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Static export for GitHub Pages
  // basePath: isProd ? "/diyoga" : "",
  // assetPrefix: isProd ? "/diyoga" : "",
  basePath: "/diyoga",
  assetPrefix: "/diyoga",
  // builds to 'out' by default, keep 'out' in github workflow build
  distDir: "diyoga",
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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
     /* Production config for GitHub Pages (subfolder deployment) */
    output: 'export',                // Static export for GitHub Pages
    basePath: '/diyoga',             // Serve from /diyoga/ subpath
    images: {                        // Required for static export
        unoptimized: true,
         },
    experimental: {
      agentFeedback: true,
       },
    // PPR disabled for static export compatibility
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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: exported to `out/` and served by Cloudflare Pages.
  output: "export",
  images: { unoptimized: true },
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

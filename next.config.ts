import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // configure image
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'cdn.shadcnbloks.com'      
      },
       {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com'      
      }
    ]
  }
};

export default nextConfig;

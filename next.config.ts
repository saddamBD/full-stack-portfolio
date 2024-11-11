import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    localPatterns: [
      {
        pathname: '/images/**',
        search: '',
      },
    ],
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
};

export default nextConfig;

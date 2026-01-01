import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['onepiece-universe.com', 's.widget-club.com', 'rukminim2.flixcart.com'],
  },
};

export default nextConfig;


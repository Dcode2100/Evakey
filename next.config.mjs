/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['onepiece-universe.com', 's.widget-club.com', 'rukminim2.flixcart.com'],
  },
};

export default nextConfig;

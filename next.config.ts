import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: false,
  reactStrictMode: true,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', //
   images: {
    domains: ['raddsoftllc.com'],
  },
  trailingSlash: false,
  reactStrictMode: true,
};

export default nextConfig;

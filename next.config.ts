import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [],
    // Static export requires unoptimized images unless using a cloud loader
    unoptimized: true,
  },
};

export default nextConfig;

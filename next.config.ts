// file: next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    // ✅ Do not block builds on ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Do not block builds on TS errors (optional, remove when strict)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

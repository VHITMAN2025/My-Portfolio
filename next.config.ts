import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.instagram.com',
        port: '',
        pathname: '/p/**',
      },
      {
        protocol: 'https',
        hostname: 'www.flaticon.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

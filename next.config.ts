import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // vercel ver
  async redirects() {
    return [
      {
        source: '/',
        destination: '/hong-jinsuk',
        permanent: true,
      },
    ];
  },

  // github ver
  output: 'export',
  distDir: 'docs',
  basePath: '/responsive-portfolio',
  assetPrefix: '/responsive-portfolio',
  images: {
    unoptimized: true, // 정적 사이트용으로 이미지
  },
};

export default nextConfig;

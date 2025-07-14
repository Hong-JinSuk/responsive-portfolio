import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

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
  distDir: isProd ? 'docs' : '.next',
  basePath: '/responsive-portfolio',
  assetPrefix: '/responsive-portfolio',
  images: {
    unoptimized: true, // 정적 사이트용으로 이미지
  },
};

export default nextConfig;

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
};

export default nextConfig;

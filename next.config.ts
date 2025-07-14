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
  // output: 'export',
  // distDir: isProd ? 'docs' : '.next', // prod는 GitHub Pages용
  // basePath: isProd ? '/responsive-portfolio' : '',
  // assetPrefix: isProd ? '/responsive-portfolio' : '',
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;

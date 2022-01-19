const REPO_NAME = 'stripe-doc';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? '/' + REPO_NAME : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/' + REPO_NAME : '',
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/payments',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

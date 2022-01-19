/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? '/stripe-doc' : '',
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};

module.exports = nextConfig;

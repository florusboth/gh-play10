/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Enable standalone output for Docker deployment
  output: 'standalone',
};

module.exports = nextConfig;

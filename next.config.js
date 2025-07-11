/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  // Enable standalone output for Docker deployment
  output: "standalone",
};

module.exports = nextConfig;

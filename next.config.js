/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  distDir: 'build',
  reactStrictMode: true,
  // distDir: 'build',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
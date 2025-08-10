/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  typescript: {
    // Enable strict type checking
    ignoreBuildErrors: false,
  },
  eslint: {
    // Enable ESLint during builds
    ignoreDuringBuilds: false,
  },
  // Optimize images
  images: {
    domains: ['localhost'],
  },
  // Environment variables
  env: {
    CUSTOM_APP_NAME: 'Pentwheel Dashboard',
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Configure images if needed in the future
  images: {
    remotePatterns: [],
  },
  
  // Production optimizations
  poweredByHeader: false,
  compress: true,
  
  // Environment variables exposed to the browser
  env: {
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
}

module.exports = nextConfig

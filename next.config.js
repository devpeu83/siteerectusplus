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
}

module.exports = nextConfig

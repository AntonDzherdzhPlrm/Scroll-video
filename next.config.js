/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.apple.com',
      },
    ],
    domains: ['localhost', 'www.apple.com'],
  },
}

module.exports = nextConfig

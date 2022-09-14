/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/main',
        permanent: true,
      }
    ]
  },
  async rewrites() {
    return []
  },
  experimental: {
    urlImports: ['']
  }
}

module.exports = nextConfig

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
  env: {
    testkey1: 'testvalue1',
    testkey2: 'testvalue2',
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'logok.org',
      'external-content.duckduckgo.com'
    ]
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const name = process.env.NEXT_PUBLIC_USERNAME || 'world';

module.exports = nextConfig

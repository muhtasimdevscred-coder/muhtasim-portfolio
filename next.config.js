/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'exclusiveaddons.com' },
      { protocol: 'https', hostname: 'ps.w.org' },
      { protocol: 'https', hostname: 'sonysmart.com.bd' },
      { protocol: 'https', hostname: 'www.sonysmart.com.bd' },
    ],
  },
};

module.exports = nextConfig;

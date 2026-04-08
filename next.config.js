/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  async redirects() {
    return [
      {
        source: '/supplier-portal',
        destination: '/supplier-portal/index.html',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

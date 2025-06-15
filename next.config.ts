/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/signin",
      },
    ];
  },
};

module.exports = nextConfig;

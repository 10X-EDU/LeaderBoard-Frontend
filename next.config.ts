/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/sign-in",
      },
    ];
  },
};

module.exports = nextConfig;

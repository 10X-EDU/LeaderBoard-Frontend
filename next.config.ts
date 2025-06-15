/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        // The destination is your NestJS backend URL
        destination: "http://10.239.24.216/:path*",
      },
    ];
  },
};

module.exports = nextConfig;

import { redirect } from "next/dist/server/api-utils";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/sign-in",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

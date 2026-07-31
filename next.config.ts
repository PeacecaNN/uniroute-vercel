import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/api/*": ["./data/universite.csv"],
  },
};

export default nextConfig;

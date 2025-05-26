import type { NextConfig } from "next";

const nextConfig: Partial<import("next").NextConfig> = {
  experimental: {
    turbopack: false,
  },
};


export default nextConfig;
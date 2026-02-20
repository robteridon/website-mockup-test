import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/website-mockup-test",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

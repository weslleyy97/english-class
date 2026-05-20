import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/english-class",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

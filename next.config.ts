import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  transpilePackages: ["@paper-design/shaders-react", "@paper-design/shaders"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

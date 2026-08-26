import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  transpilePackages: ["@paper-design/shaders-react", "@paper-design/shaders"],
  images: {
    unoptimized: true,
    // Declared so the one quality the pages ask for stays valid under Next 16,
    // which stops accepting undeclared values.
    qualities: [100],
  },
};

export default nextConfig;

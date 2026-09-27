import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin Turbopack to this package so a parent ~/package-lock.json is ignored
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;

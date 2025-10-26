import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  compress: true,
  experimental: {
    optimizePackageImports: ["lodash", "date-fns", "react-icons", "rxjs"],
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },
  images: { formats: ["image/avif", "image/webp"] },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Opcional: reducir consumo de memoria deshabilitando source maps en dev
  productionBrowserSourceMaps: false,
};

export default nextConfig;

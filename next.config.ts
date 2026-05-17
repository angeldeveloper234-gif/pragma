import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Opcional: reducir consumo de memoria deshabilitando source maps en dev
  productionBrowserSourceMaps: false,
};

export default nextConfig;

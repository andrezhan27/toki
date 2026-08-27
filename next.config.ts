import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@andrezhan27/intelis-restaurant-ui"],
  async redirects() {
    return [
      {
        source: "/reservas",
        destination: "/reservation",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

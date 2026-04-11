import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kiddy-books.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;

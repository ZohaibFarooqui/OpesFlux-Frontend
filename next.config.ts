import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [],
  },
  async redirects() {
    return [
      // Industry pages removed because the product doesn't serve these trades.
      { source: "/industries/construction", destination: "/industries", permanent: true },
      { source: "/industries/professional-services", destination: "/industries", permanent: true },
      // Restaurants page reframed around what OpesFlux really does for hospitality groups.
      { source: "/industries/restaurants", destination: "/industries/multi-site-cafes", permanent: true },
      // Linked from an old blog post but never existed.
      { source: "/blog/erp-examples", destination: "/blog/what-is-an-erp-system-complete-guide-for-businesses", permanent: true },
    ];
  },
};

export default nextConfig;

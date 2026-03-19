/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [25, 50, 75, 100],
    remotePatterns: [], // Gerekirse buraya domain eklersin
  },
};

export default nextConfig;
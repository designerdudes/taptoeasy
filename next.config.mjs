/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.hostinger.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/cloth-hangers',
        destination: '/products/premium-ceiling-hanger',
        permanent: true,
      },
      {
        source: '/products/mosquito-mesh-doors',
        destination: '/products/mosquito-mesh',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

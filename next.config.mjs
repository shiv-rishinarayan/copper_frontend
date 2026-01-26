// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'platinumdjango-production.up.railway.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Optimize for Vercel deployment
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Handle potential build issues
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Disable static optimization for dynamic pages
  output: 'standalone',
  // Add output for static export if needed
  trailingSlash: true,
  // Ensure proper handling of API routes
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};

export default nextConfig;

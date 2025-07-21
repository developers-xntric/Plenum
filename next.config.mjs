/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'thedailyguardian.com', 'thearabianpost.com','emiratesinside.net'],
  },
  reactStrictMode: true,
  compress: true,
  // Remove swcMinify - Next.js 15 uses SWC minification by default
  // Remove legacyBrowsers - Next.js 15 targets modern browsers by default

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;


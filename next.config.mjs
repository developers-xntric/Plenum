/** @type {import('next').NextConfig} */

export const oldBlogUrls = [
  "https://m.plenum-tech.com/",
  "https://m.plenum-tech.com/ms-dynamics-business-central-new/",
  "https://m.plenum-tech.com/plenum-erp-freebook-bc-fo/",
];

const nextConfig = {
  reactStrictMode: true,
  compress: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "thedailyguardian.com" },
      { protocol: "https", hostname: "thearabianpost.com" },
      { protocol: "https", hostname: "emiratesinside.net" },
      { protocol: "https", hostname: "lps-me.com" },
    ],
    // ✅ Required from Next.js 16+
    qualities: [50, 60, 75, 80, 90, 100],
  },

  // ✅ Fix cross-origin LAN warning in dev
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3001",
    "http://192.168.18.22:3000",
    "http://192.168.18.22:3001",
  ],

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

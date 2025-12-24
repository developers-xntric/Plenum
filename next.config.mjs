/** @type {import('next').NextConfig} */

export const oldBlogUrls = [
  "https://m.plenum-tech.com/",
  "https://m.plenum-tech.com/ms-dynamics-business-central-new/",
  "https://m.plenum-tech.com/plenum-erp-freebook-bc-fo/",
];

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "thedailyguardian.com" },
      { protocol: "https", hostname: "thearabianpost.com" },
      { protocol: "https", hostname: "emiratesinside.net" },
      { protocol: "https", hostname: "lps-me.com" },
    ],
  },
  reactStrictMode: true,
  compress: true,
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

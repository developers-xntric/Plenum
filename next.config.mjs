/** @type {import('next').NextConfig} */

export const oldBlogUrls = [
  "https://m.plenum-tech.com/",
  "https://m.plenum-tech.com/ms-dynamics-business-central-new/",
  "https://m.plenum-tech.com/plenum-erp-freebook-bc-fo/",
];

const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "thedailyguardian.com",
      "thearabianpost.com",
      "emiratesinside.net",
      "lps-me.com",
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

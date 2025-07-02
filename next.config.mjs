/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    legacyBrowsers: false,
  },
  images:{
    domains:['res.cloudinary.com','thedailyguardian.com','thearabianpost.com']
  },
  reactStrictMode: true,
};

export default nextConfig;

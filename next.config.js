/** @type {import('next').NextConfig} */
// @ts-nocheck
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontendNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: false,
  disable: false, // process.env.NODE_ENV === "development",
  swcMinify: true,
  disableDevLogs: true,
  // workboxOptions: { swSrc: "/worker/index.ts" },
});

const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = withPWA(nextConfig);

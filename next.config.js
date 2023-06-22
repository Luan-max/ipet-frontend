/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
      API_KEY: process.env.API_KEY,
      SECRET_KEY: process.env.SECRET_KEY
    },
  };

module.exports = nextConfig

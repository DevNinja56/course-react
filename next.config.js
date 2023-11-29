/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['times-con.s3.us-east-2.amazonaws.com', "assets.timescoursefinder.com", 'picsum.photos']
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  },

}

module.exports = nextConfig

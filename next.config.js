/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['times-con.s3.us-east-2.amazonaws.com', "assets.timescoursefinder.com"]
  }

}

module.exports = nextConfig

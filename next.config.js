/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['times-con.s3.us-east-2.amazonaws.com', "assets.timescoursefinder.com", 'picsum.photos', "lh3.googleusercontent.com"]
  }

}

module.exports = nextConfig

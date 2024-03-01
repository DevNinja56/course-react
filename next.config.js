/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['times-con.s3.us-east-2.amazonaws.com', "assets.timescoursefinder.com", 'picsum.photos', "lh3.googleusercontent.com","encrypted-tbn0.gstatic.com","images.unsplash.com","media.istockphoto.com","assets.jigsaw24.com"]
  }

}

module.exports = nextConfig

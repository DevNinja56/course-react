/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [
            'times-con.s3.us-east-2.amazonaws.com',
            'assets.timescoursefinder.com',
            'picsum.photos',
            'lh3.googleusercontent.com',
            'www.scholarshipsads.com',
            'course-options-assets.s3.ap-south-1.amazonaws.com',
            'mu-website.azureedge.net',
            'co-assets-bucket.s3-accelerate.amazonaws.com'
        ]
    }
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [
            'times-con.s3.us-east-2.amazonaws.com',
            'assets.timescoursefinder.com',
            'picsum.photos',
            'lh3.googleusercontent.com',
            'd31cuupyjbe4e1.cloudfront.net',
            'seekvectorlogo.com',
            'course-options-assets.s3.ap-south-1.amazonaws.com',
            "studentconnect.org"
        ]
    }
};

module.exports = nextConfig;

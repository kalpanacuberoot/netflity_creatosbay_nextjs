require('dotenv').config();

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["duckduckgo.com","images.unsplash.com", 't4.ftcdn.net', 'imgs.search.brave.com', 'creatorsbay-media-bucket.s3.ap-south-1.amazonaws.com', '8b5a-2405-201-402a-d04f-6138-ee21-1aa3-6890.ngrok-free.app'], // Add the domain(s) you need here
  },
  env:{

  },
  // async rewrites() {
  //   return [
  //     // Add a rewrite rule for /api/handler
  //     {
  //       source: '/api/handler', // The source route
  //       destination: '/api/handler', // The destination route
  //     },
  //     // Add more rewrite rules as needed
  //   ];
  // },
  // experimental: {
  //   api: {
  //     externalResolver: true,
  //     bodyParser: true,
  //   },
  // },
 
}

module.exports = nextConfig

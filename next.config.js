/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // domains: ["images.unsplash.com"],

    domains: ["images.unsplash.com",'t4.ftcdn.net','imgs.search.brave.com', 'creatorsbay-media-bucket.s3.ap-south-1.amazonaws.com','8b5a-2405-201-402a-d04f-6138-ee21-1aa3-6890.ngrok-free.app'], // Add the domain(s) you need here
    // domains: ['8b5a-2405-201-402a-d04f-6138-ee21-1aa3-6890.ngrok-free.app'],
  },
  env: {
    API_URL: 'https://backend.creatorsbay.app/api',
  },
}



module.exports = nextConfig

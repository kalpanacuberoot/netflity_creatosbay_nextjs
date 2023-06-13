/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  experimental:{
    images:{
      domains:["images.unsplash.com"],
      unoptimized: true,
    },
  }
  }
 


module.exports = nextConfig

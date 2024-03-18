/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'assets.oyoroomscdn.com',
      }
    ]
  }
};

export default nextConfig;

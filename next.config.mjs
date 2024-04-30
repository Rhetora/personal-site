/** @type {import('next').NextConfig} */

const env = process.env.NODE_ENV
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: '/personal-site',
    assetPrefix: '/personal-site/', 
};

export default nextConfig;

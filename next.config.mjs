/** @type {import('next').NextConfig} */

const env = process.env.NODE_ENV == 'production;'
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: env ? '/personal-site': '',
    assetPrefix: env ? '/personal-site/': '', 
};

export default nextConfig;

/** @type {import('next').NextConfig} */


const env = process.env.NODE_ENV === 'development';;
const nextConfig = {
    // reactStrictMode: true,
    output: 'export',
    basePath: '/personal-site',
    assetPrefix: '/personal-site/', 
    // pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
output: 'export',
  basePath: '/personal-site',
  assetPrefix: '/personal-site/', // assetPrefix requires the trailing slash
  github: {
    pages: {
      basePath: true,
    },
  },
};

export default nextConfig;

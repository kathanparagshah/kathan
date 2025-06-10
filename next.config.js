/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'docs',
  basePath: isProd ? '/kathan' : '',
  assetPrefix: isProd ? '/kathan/' : '',
  images: {
    unoptimized: true
  },
  eslint: {
    dirs: ['pages', 'components', 'lib', 'src']
  }
}

module.exports = nextConfig
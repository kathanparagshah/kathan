/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/kathan',
  assetPrefix: '/kathan/',
  generateBuildId: () => {
    return Date.now().toString()
  },
  images: {
    unoptimized: true
  },
  eslint: {
    dirs: ['pages', 'components', 'lib', 'src']
  }
}

module.exports = nextConfig
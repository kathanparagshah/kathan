const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  distDir: 'docs',
  basePath: isProd ? '/kathan' : '',
  assetPrefix: isProd ? '/kathan/' : '',
  trailingSlash: true,
  images: { unoptimized: true },
};
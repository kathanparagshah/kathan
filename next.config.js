const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  distDir: 'docs',
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  images: { unoptimized: true },
};
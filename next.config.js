const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

module.exports = {
  ...(isGitHubPages && { output: 'export' }),
  ...(isGitHubPages && { distDir: 'docs' }),
  basePath: isGitHubPages ? '/kathan' : '',
  assetPrefix: isGitHubPages ? '/kathan/' : '',
  trailingSlash: true,
  images: { unoptimized: true },
};
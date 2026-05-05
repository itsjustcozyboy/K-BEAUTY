/** @type {import('next').NextConfig} */
const isStaticExport = process.env.STATIC_EXPORT === 'true'
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const repoName = 'K-BEAUTY'

const nextConfig = {
	output: isStaticExport || isGitHubPages ? 'export' : 'standalone',
	trailingSlash: isStaticExport || isGitHubPages,
	images: {
		unoptimized: isStaticExport || isGitHubPages,
	},
	basePath: isGitHubPages ? `/${repoName}` : undefined,
	assetPrefix: isStaticExport || isGitHubPages ? `/${repoName}/` : undefined,
}

module.exports = nextConfig

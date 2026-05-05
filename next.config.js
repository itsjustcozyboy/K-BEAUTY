/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const repoName = 'K-BEAUTY'

const nextConfig = {
	output: isGitHubPages ? 'export' : 'standalone',
	trailingSlash: isGitHubPages,
	images: {
		unoptimized: isGitHubPages,
	},
	basePath: isGitHubPages ? `/${repoName}` : undefined,
	assetPrefix: isGitHubPages ? `/${repoName}/` : undefined,
}

module.exports = nextConfig

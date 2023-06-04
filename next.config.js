/** @type {import('next').NextConfig} */
const nextConfig = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = nextConfig({
	reactStrictMode: true,
	images: {
		domains: ['pbs.twimg.com'],
	},
});

const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig(
	module.exports,
	{
		silent: true,
		org: 'jarrod-malkovic',
		project: 'portfolio',
	},
	{
		widenClientFileUpload: true,
		transpileClientSDK: true,
		tunnelRoute: '/monitoring',
		hideSourceMaps: true,
		disableLogger: true,
	}
);

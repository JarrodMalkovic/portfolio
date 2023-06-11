/** @type {import('next').NextConfig} */
const nextConfig = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = nextConfig({
	reactStrictMode: true,
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	images: {
		domains: ['media.graphassets.com'],
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(graphql|gql)$/,
			exclude: /node_modules/,
			loader: 'graphql-tag/loader',
		});
		return config;
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

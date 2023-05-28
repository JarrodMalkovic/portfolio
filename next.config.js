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

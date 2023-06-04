import * as Sentry from '@sentry/nextjs';

if (process.env.ENVIRONMENT === 'production') {
	Sentry.init({
		dsn: 'https://407e1c77166d474d8624e1fa0bf1e198@o919938.ingest.sentry.io/4505295031238656',
		tracesSampleRate: 1,
		debug: false,
		replaysOnErrorSampleRate: 1.0,
		replaysSessionSampleRate: 0.1,
		integrations: [
			new Sentry.Replay({
				maskAllText: true,
				blockAllMedia: true,
			}),
		],
	});
}

import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Jarrod Malkovic</title>
			</Head>
			<ThemeProvider attribute="class">
				<div className="min-h-screen transition-all duration-200 bg-white dark:bg-slate-900">
					<Component {...pageProps} />
				</div>
			</ThemeProvider>
			<Analytics />
		</>
	);
}

export default MyApp;

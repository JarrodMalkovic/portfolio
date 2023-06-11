import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
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

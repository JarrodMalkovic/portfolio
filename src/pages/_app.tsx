import { classNames } from '@/utils/classNames';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';

import '../styles/globals.css';

const poppins = Poppins({
	weight: ['300', '400', '500', '600'],
	subsets: ['latin'],
	display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider attribute="class">
				<main className={classNames('min-h-screen bg-white dark:bg-slate-900', poppins.className)}>
					<Component {...pageProps} />
				</main>
			</ThemeProvider>
			<Analytics />
		</>
	);
}

export default MyApp;

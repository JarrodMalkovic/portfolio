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
				<main className={poppins.className}>
					<Component {...pageProps} />
				</main>
			</ThemeProvider>
			<Analytics />
		</>
	);
}

export default MyApp;

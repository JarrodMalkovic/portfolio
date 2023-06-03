import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Jarrod Malkovic</title>
			</Head>
			<ThemeProvider attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;

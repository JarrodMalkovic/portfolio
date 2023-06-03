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
				<div className="min-h-screen transition-all duration-200 bg-white dark:bg-slate-900">
					<Component {...pageProps} />
				</div>
			</ThemeProvider>
		</>
	);
}

export default MyApp;

import * as React from 'react';

import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Progress from '@/components/Progress';
import useNavigationProgress from '@/hooks/useNavigationProgress';

function MyApp({ Component, pageProps }: AppProps) {
	const { isAnimating } = useNavigationProgress();

	return (
		<>
			<Head>
				<title>Jarrod Malkovic</title>
			</Head>
			<Progress isAnimating={isAnimating} />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

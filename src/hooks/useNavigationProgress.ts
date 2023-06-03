import * as React from 'react';
import { useRouter } from 'next/router';

/**
 * Custom React hook that tracks the navigation progress of the Next.js router.
 *
 * @returns {Object} An object containing the `isAnimating` boolean value.
 */
const useNavigationProgress = () => {
	const [isAnimating, setIsAnimating] = React.useState(false);
	const router = useRouter();

	React.useEffect(() => {
		const handleStart = (url: string, { shallow }: { shallow: boolean }) => {
			if (shallow || url.includes('?')) {
				return;
			}

			setIsAnimating(true);
		};

		const handleStop = () => {
			setIsAnimating(false);
		};

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleStop);
		router.events.on('routeChangeError', handleStop);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleStop);
			router.events.off('routeChangeError', handleStop);
		};
	}, [router]);

	return { isAnimating };
};

export default useNavigationProgress;

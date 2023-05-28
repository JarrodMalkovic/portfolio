import * as React from 'react';

/**
 * Custom hook that detects the user's system-wide dark mode preference.
 *
 * @returns {boolean} The current value of the dark mode preference.
 */
const usePrefersDarkMode = () => {
	const [value, setValue] = React.useState(true);

	React.useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handler = () => setValue(mediaQuery.matches);
		mediaQuery.addEventListener('change', handler);
		setValue(mediaQuery.matches);

		return () => mediaQuery.removeEventListener('change', handler);
	}, []);

	return value;
};

export default usePrefersDarkMode;

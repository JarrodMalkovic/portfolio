import * as React from 'react';

import usePrefersDarkMode from './usePrefersDarkMode';
import useSafeLocalStorage from './useSafeLocalStorage';

/**
 * Custom hook that enables or disables dark mode based on user preference.
 *
 * @returns {[boolean, Function]} A tuple containing the current dark mode status and a function to toggle the dark mode.
 */
const useDarkMode = () => {
	const prefersDarkMode = usePrefersDarkMode();
	const [isEnabled, setIsEnabled] = useSafeLocalStorage('dark-mode', undefined);

	const enabled = isEnabled == undefined ? prefersDarkMode : isEnabled;

	React.useEffect(() => {
		if (window === undefined) {
			return;
		}

		const root = window.document.documentElement;
		root.classList.remove(enabled ? 'light' : 'dark');
		root.classList.add(enabled ? 'dark' : 'light');
	}, [enabled]);

	return [enabled, setIsEnabled];
};

export default useDarkMode;

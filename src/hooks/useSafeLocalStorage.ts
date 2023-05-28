import * as React from 'react';

/**
 * Custom hook that provides a safe interface for interacting with the local storage.
 *
 * @param {string} key - The key to use for storing and retrieving the value in local storage.
 * @param {*} initialValue - The initial value to use if no stored value is found.
 *
 * @returns {[*, Function]} A tuple containing the current stored value and a function to update the value.
 */
const useSafeLocalStorage = (key: string, initialValue: any) => {
	const getValue = React.useCallback(
		(key: string) => {
			try {
				const value = window.localStorage.getItem(key);
				return value ? JSON.parse(value) : initialValue;
			} catch {
				return initialValue;
			}
		},
		[initialValue]
	);

	const [valueProxy, setValueProxy] = React.useState(() => getValue(key));

	const setValue = React.useCallback(
		(value: any) => {
			try {
				window.localStorage.setItem(key, value);
				setValueProxy(value);
			} catch {
				setValueProxy(value);
			}
		},
		[key]
	);

	React.useEffect(() => {
		const onFocus = () => setValue(getValue(key));

		window.addEventListener('focus', onFocus);

		return () => window.removeEventListener('focus', onFocus);
	}, [getValue, key, setValue]);

	return [valueProxy, setValue];
};

export default useSafeLocalStorage;

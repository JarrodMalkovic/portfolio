import * as React from 'react';

/**
 * Custom hook that updates the document title.
 *
 * @param {string} title - The title to set for the document.
 */
const useTitle = (title: string) => {
	React.useEffect(() => {
		return () => {
			document.title = title;
		};
	}, [title]);
};

export default typeof document !== 'undefined' ? useTitle : (_title: string) => {};

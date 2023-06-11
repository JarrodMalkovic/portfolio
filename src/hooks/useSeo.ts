import * as React from 'react';

/**
 * Custom hook that updates the document title.
 *
 * @param {string} title - The title to set for the document.
 */
type SeoOptions = {
	title?: string;
	description?: string;
};

const DEFAULT_DESCRIPTION = 'Welcome to my portfolio!';

const useSeo = (options?: SeoOptions): void => {
	const { title, description } = options || {};

	React.useEffect(() => {
		if (title) {
			document.title = title;
		}

		const metaDescription = description || DEFAULT_DESCRIPTION;
		const metaTag = document.querySelector('meta[name="description"]');

		if (metaTag) {
			metaTag.setAttribute('content', metaDescription);
		} else {
			const newMetaTag = document.createElement('meta');
			newMetaTag.setAttribute('name', 'description');
			newMetaTag.setAttribute('content', metaDescription);
			document.head.appendChild(newMetaTag);
		}
	}, [title, description]);
};

export default typeof document !== 'undefined' ? useSeo : (_options?: SeoOptions) => {};

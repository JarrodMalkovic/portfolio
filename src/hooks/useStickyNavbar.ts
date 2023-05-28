import * as React from 'react';

/**
 * Custom hook that adds sticky behavior to a navbar when scrolling.
 *
 * @param {number} height - The height at which the navbar should become sticky. Default is 70.
 *
 * @returns {boolean} The current sticky state of the navbar.
 */
const useStickyNavbar = (height: number = 70): Boolean => {
	const [isSticky, setIsSticky] = React.useState<Boolean>(false);

	React.useEffect(() => {
		const stickNavbar = () => setIsSticky(window.scrollY > height);

		window.addEventListener('scroll', stickNavbar);

		return () => {
			window.removeEventListener('scroll', stickNavbar);
		};
	}, [height]);

	return isSticky;
};

export default typeof window !== 'undefined' ? useStickyNavbar : () => false;

/**
 * Utility function that scrolls the window to the top of the page.
 */
const scrollToTop = () => {
	window?.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};

export { scrollToTop };

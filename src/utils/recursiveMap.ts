import * as React from 'react';

/**
 * Recursively applies a mapping function to each React element in an array of children, including nested children.
 *
 * @param {React.ReactElement[]} children - An array of React elements to be mapped.
 * @param {function} fn - The mapping function to be applied to each React element.
 * @returns {React.ReactElement[]} - An array of React elements with the mapping function applied recursively.
 */
const recursiveMap = (
	children: React.ReactElement[],
	fn: (child: React.ReactElement) => React.ReactElement
): React.ReactElement[] => {
	return React.Children.map(children, (child) => {
		if (!React.isValidElement(child)) {
			return child;
		}

		if ((child as React.ReactElement).props.children) {
			const props = {
				children: recursiveMap((child as React.ReactElement).props.children, fn),
			};

			child = React.cloneElement(child, props);
		}

		return fn(child);
	});
};

export { recursiveMap };

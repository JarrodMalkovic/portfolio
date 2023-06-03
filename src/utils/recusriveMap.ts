import * as React from 'react';

/**
 * 
 * @param children 
 * @param fn 
 * @returns 
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

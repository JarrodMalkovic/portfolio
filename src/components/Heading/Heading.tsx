import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const heading = cva(['dark:text-white', 'text-black'], {
	variants: {
		size: {
			sm: ['text-sm'],
			md: ['text-md'],
			lg: ['text-lg'],
			xl: ['text-xl'],
			'2xl': ['text-2xl'],
			'3xl': ['text-3xl'],
		},
		weight: {
			bold: ['font-bold'],
			medium: ['font-medium'],
			normal: ['font-normal'],
			light: ['font-light'],
		},
	},
});
interface HeadingProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof heading> {
	headingType: HeadingType;
}

const Heading: React.FC<HeadingProps> = ({
	headingType = 'h1',
	size = 'md',
	weight = 'normal',
	children,
	...rest
}) => {
	const HeadingTag = headingType;

	return (
		<HeadingTag className={heading({ size, weight })} {...rest}>
			{children}
		</HeadingTag>
	);
};

export default Heading;

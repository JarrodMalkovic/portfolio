import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

type TextType = 'p' | 'span';

const text = cva(['dark:text-white', 'text-black', 'leading-6', 'tracking-wide'], {
	variants: {
		size: {
			xs: ['text-xs'],
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
		colour: {
			light: ['text-gray-600', 'dark:text-slate-400'],
			normal: [],
		},
	},
});

interface TextProps
	extends React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>,
		VariantProps<typeof text> {
	textType?: TextType;
}

const Text: React.FC<TextProps> = ({
	textType = 'p',
	size = 'md',
	weight = 'normal',
	colour = 'normal',
	children,
	...rest
}) => {
	const TextElement = textType;

	return (
		<TextElement className={text({ size, weight, colour })} {...rest}>
			{children}
		</TextElement>
	);
};

export default Text;

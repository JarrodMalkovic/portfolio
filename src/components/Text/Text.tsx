import React, { ReactNode } from 'react';

type TextProps = {
	textType: 'p' | 'span';
	children?: ReactNode;
	[key: string]: any;
};

const Text: React.FC<TextProps> = ({ textType, children, ...props }) => {
	const TextElement = textType;

	return <TextElement {...props}>{children}</TextElement>;
};

export default Text;

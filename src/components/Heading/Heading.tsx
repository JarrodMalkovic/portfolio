import { ReactNode } from 'react';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface IProps {
	headingType: HeadingType;
	children?: ReactNode;
	[key: string]: any;
}

const Heading = ({ headingType, children, ...props }: IProps) => {
	const HeadingTag = headingType;

	return <HeadingTag {...props}>{children}</HeadingTag>;
};

export default Heading;

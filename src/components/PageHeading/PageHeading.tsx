import * as React from 'react';

import Heading from '../Heading/Heading';

interface PageHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

const PageHeading: React.FC<PageHeadingProps> = ({ children, ...rest }) => {
	return (
		<section
			className="bg-[#f2f2f2] dark:bg-[#131c33] dark:text-white pb-12 pt-32 md:pt-36 md:pb-16 flex-col flex justify-center items-center"
			{...rest}
		>
			<Heading headingType="h1" size="3xl" weight="medium">
				{children}
			</Heading>
		</section>
	);
};

export default PageHeading;

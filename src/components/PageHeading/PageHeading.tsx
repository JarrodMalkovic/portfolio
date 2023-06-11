import * as React from 'react';

interface IProps {
	children: React.ReactNode;
}

const PageHeading = ({ children }: IProps) => {
	return (
		<section className="bg-[#f2f2f2] dark:bg-[#131c33] dark:text-white pb-12 pt-32 md:pt-36 md:pb-16 flex-col flex justify-center items-center">
			<h1 className="text-3xl font-medium text-center">{children}</h1>
		</section>
	);
};

export default PageHeading;

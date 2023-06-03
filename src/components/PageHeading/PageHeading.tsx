import * as React from 'react';

interface IProps {
	children: React.ReactNode;
}

const PageHeading = ({ children }: IProps) => {
	return (
		<section className="bg-[#f2f2f2] dark:bg-[#131c33] dark:text-white pt-36 pb-16 flex-col flex justify-center items-center">
			<h1 className="text-3xl font-semibold text-center">{children}</h1>
		</section>
	);
};

export default PageHeading;

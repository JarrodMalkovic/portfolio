import * as React from 'react';

interface IProps {
	children: React.ReactNode;
}

const Container = ({ children }: IProps) => {
	return (
		<div className="px-6">
			<div className="sm:py-16 py-8 container mx-auto max-w-[1111px] dark:text-white">
				{children}
			</div>
		</div>
	);
};

export default Container;

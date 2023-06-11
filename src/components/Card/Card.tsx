import * as React from 'react';

interface IProps {
	children: React.ReactNode;
}

const Card = ({ children }: IProps) => {
	return (
		<div className="shadow-lg md:shadow-2xl hover:-translate-y-2 duration-[250ms] dark:bg-[#131c33] top-0 rounded-lg p-8">
			{children}
		</div>
	);
};

export default Card;

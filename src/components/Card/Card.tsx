import * as React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<CardProps> = ({ children, ...rest }) => {
	return (
		<div
			className="shadow-lg md:shadow-2xl hover:-translate-y-2 duration-[250ms] dark:bg-[#131c33] top-0 rounded-lg p-8"
			{...rest}
		>
			{children}
		</div>
	);
};

export default Card;

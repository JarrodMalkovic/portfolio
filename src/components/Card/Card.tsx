import * as React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<CardProps> = ({ children, ...rest }) => {
	return (
		<div
			className="dark:shadow-lg dark:md:shadow-2xl hover:-translate-y-2 transition-transform duration-[300] dark:bg-[#131c33] top-0 rounded-lg border dark:border-transparent border-gray-300 shadow-lg"
			{...rest}
		>
			{children}
		</div>
	);
};

export default Card;

import * as React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<ContainerProps> = ({ children, ...rest }) => {
	return (
		<div className="px-6" {...rest}>
			<div className="sm:py-16 py-8 container mx-auto max-w-[1111px] dark:text-white">
				{children}
			</div>
		</div>
	);
};

export default Container;

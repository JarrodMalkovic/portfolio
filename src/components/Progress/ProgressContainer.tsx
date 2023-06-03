import * as React from 'react';

interface IProps {
	animationDuration: number;
	children: React.ReactNode;
	isFinished: boolean;
}

const ProgressContainer = ({ animationDuration, children, isFinished }: IProps) => {
	return (
		<div
			className="pointer-events-none"
			style={{
				opacity: isFinished ? 0 : 1,
				transition: `opacity ${animationDuration}ms linear`,
			}}
		>
			{children}
		</div>
	);
};

export default ProgressContainer;

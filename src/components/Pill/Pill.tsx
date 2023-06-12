import * as React from 'react';

interface PillProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const Pill: React.FC<PillProps> = ({ children, ...rest }) => {
	return (
		<p
			className="inline-block px-3 py-1 text-sm border border-slate-800 dark:border-slate-200 rounded-2xl text-slate-800 dark:text-slate-200"
			{...rest}
		>
			{children}
		</p>
	);
};

export default Pill;

import * as React from 'react';

type PillProps = {
	children: React.ReactNode;
};

const Pill: React.FC<PillProps> = ({ children }) => {
	return (
		<p className="inline-block px-3 py-1 text-sm border border-slate-800 dark:border-slate-200 rounded-2xl text-slate-800 dark:text-slate-200">
			{children}
		</p>
	);
};

export default Pill;

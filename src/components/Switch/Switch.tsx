import { classNames } from '@/utils/classNames';
import { Switch as HeadlessSwitch } from '@headlessui/react';
import * as React from 'react';

interface SwitchProps extends React.HTMLAttributes<HTMLButtonElement> {
	checked: boolean;
	onChange: (data: unknown) => void;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
	return (
		<HeadlessSwitch
			checked={checked}
			onChange={onChange}
			className="relative inline-flex items-center justify-center w-8 h-4 rounded-full cursor-pointer group shrink-0"
		>
			<span className="sr-only">Use setting</span>
			<span aria-hidden="true" className="absolute w-full h-full rounded-md pointer-events-none" />
			<span
				aria-hidden="true"
				className={classNames(
					checked ? 'bg-slate-800' : 'bg-slate-200',
					'pointer-events-none absolute h-4 w-8 mx-auto rounded-full  transition-colors ease-in-out duration-200'
				)}
			/>
			<span
				aria-hidden="true"
				className={classNames(
					checked ? 'translate-x-5' : 'translate-x-0',
					'pointer-events-none absolute left-0 inline-block h-4 w-4 border  dark:shadow dark:border-slate-900 border-slate-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200'
				)}
			/>
		</HeadlessSwitch>
	);
};

export default Switch;

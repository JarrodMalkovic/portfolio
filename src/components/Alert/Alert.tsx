import * as React from 'react';
import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/solid';

type AlertStatus = 'success' | 'error';

interface AlertProps {
	message: string;
	status: AlertStatus;
}

const styles = {
	background: {
		base: 'p-4 rounded-md',
		variants: {
			success: 'bg-green-50 dark:bg-[#9be6b4] dark:bg-opacity-[0.16]',
			error: 'bg-[#fed7d7] dark:bg-[#fed7d7] dark:bg-opacity-[0.16]',
		},
	},
	icon: {
		base: 'w-5 h-5',
		variants: {
			success: 'text-green-400 dark:text-green-300',
			error: 'text-red-400 dark:text-red-300',
		},
	},
};

const icons = {
	success: CheckCircleIcon,
	error: ExclamationCircleIcon,
};

const Alert = ({ message, status }: AlertProps) => {
	const Icon = icons[status];

	return (
		<div
			className={`
				${styles['background']['base']}
				${styles['background']['variants'][status]}`}
		>
			<div className="flex">
				<div className="flex-shrink-0">
					<Icon
						className={`
							${styles['icon']['base']}
							${styles['icon']['variants'][status]}`}
					/>
				</div>
				<div className="ml-3">
					<p className="dark:text-white text-sm font-semibold text-gray-800 opacity-100">
						{message}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Alert;

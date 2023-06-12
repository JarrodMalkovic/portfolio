import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/solid';
import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { BsCircleFill } from 'react-icons/bs';

const iconMap = {
	success: CheckCircleIcon,
	error: ExclamationCircleIcon,
};

const alert = cva(['p-4', 'rounded-md'], {
	variants: {
		intent: {
			success: ['bg-green-50', 'dark:bg-[#9be6b4]', 'dark:bg-opacity-[0.16]'],
			error: ['bg-[#fed7d7]', 'dark:bg-[#fed7d7]', 'dark:bg-opacity-[0.16]'],
		},
	},
	defaultVariants: {
		intent: 'success',
	},
});

const icon = cva(['w-5', 'h-5'], {
	variants: {
		intent: {
			success: ['text-green-400', 'dark:text-green-300'],
			error: ['text-red-400', 'dark:text-red-300'],
		},
	},
	defaultVariants: {
		intent: 'success',
	},
});

interface AlertProps extends VariantProps<typeof alert>, VariantProps<typeof icon> {
	message: string;
}

const Alert: React.FC<AlertProps> = ({ intent = 'success', message, ...rest }) => {
	const Icon = intent ? iconMap[intent] : BsCircleFill;

	return (
		<div className={alert({ intent })} {...rest}>
			<div className="flex">
				<div className="flex-shrink-0">
					<Icon className={icon({ intent })} />
				</div>
				<div className="ml-3">
					<p className="text-sm font-semibold text-gray-800 opacity-100 dark:text-white">
						{message}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Alert;

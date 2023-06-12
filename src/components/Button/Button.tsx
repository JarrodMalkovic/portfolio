import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

const button = cva(
	[
		'inline-flex',
		'items-center',
		'justify-center',
		'rounded-md',
		'text-sm',
		'font-medium',
		'transition-colors',
		'focus-visible:outline-none',
		'focus-visible:ring-2',
		'focus-visible:ring-ring',
		'focus-visible:ring-offset-2',
		'disabled:opacity-50',
		'disabled:pointer-events-none',
		'ring-offset-background',
	],
	{
		variants: {
			intent: {
				primary: [
					'text-white',
					'bg-black',
					'dark:text-black',
					'hover:bg-gray-900',
					'dark:bg-slate-100',
					'dark:hover:bg-slate-300',
				],
			},
			size: {
				medium: ['md:w-40', 'p-2.5'],
			},
		},
		defaultVariants: {
			intent: 'primary',
			size: 'medium',
		},
	}
);

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
	isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ intent = 'primary', size = 'medium', isLoading = false, children, ...rest }, ref) => {
		return (
			<button ref={ref} className={button({ intent, size })} disabled={isLoading} {...rest}>
				{children}
			</button>
		);
	}
);
Button.displayName = 'Button';

export default Button;

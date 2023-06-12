import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

const input = cva(
	[
		'block',
		'w-full',
		'p-2',
		'border',
		'text-sm',
		'rounded-md',
		'focus-visible:outline-none',
		'ring-inset',
		'focus:ring-0',
	],
	{
		variants: {
			intent: {
				primary: [
					'focus:border-slate-700',
					'focus:dark:border-slate-600',
					'border-gray-300',
					'dark:border-gray-800',
					'dark:bg-[#131c33]',
				],
				error: [
					'border-red-300',
					'dark:border-red-800',
					'dark:focus:border-red-600',
					'dark:placeholder-red-600',
					'dark:text-red-600',
					'focus:border-red-500',
					'placeholder-red-300',
					'text-red-900',
				],
			},
		},
	}
);

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
		VariantProps<typeof input> {
	name: string;
	register?: UseFormRegister<any>;
	isTextarea?: boolean;
	error?: FieldError;
}

const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
	({ isTextarea, name, register, error, ...props }, ref) => {
		const intent = error == null ? 'primary' : 'error';

		return (
			<>
				{isTextarea ? (
					<textarea
						ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
						className={input({ intent })}
						rows={5}
						{...props}
						{...(register && register(name))}
					/>
				) : (
					<input
						ref={ref as React.ForwardedRef<HTMLInputElement>}
						type="text"
						className={input({ intent })}
						{...props}
						{...(register && register(name))}
					/>
				)}
				{error && <p className="mt-1 text-sm text-red-600 dark:text-red-600">{error.message}</p>}
			</>
		);
	}
);

Input.displayName = 'Input';

export default Input;

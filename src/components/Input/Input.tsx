import * as React from 'react';
import { FieldError } from 'react-hook-form';

import { classNames } from '../../utils/classNames';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
	name: string;
	register?: (a: any) => any;
	isTextarea?: boolean;
	error?: FieldError;
}

const styles = {
	base: 'focus:ring-black focus:ring-2 focus:outline-none ring-inset block w-full focus:ring-0 focus:border-gray-500 dark:focus:border-slate-600 p-2 border text-sm border-gray-300 rounded-md dark:border-gray-800 dark:bg-[#131c33]',
	error:
		'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 dark:border-red-800 dark:text-red-600 dark:placeholder-red-600 dark:focus:border-red-600',
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ isTextarea, name, register, error, ...props }, ref) => (
		<>
			{isTextarea ? (
				<textarea
					ref={ref as any}
					className={classNames(styles.base, error != null && styles.error)}
					rows={5}
					{...(props as any)}
					{...(register && register(name))}
				/>
			) : (
				<input
					ref={ref as any}
					type="text"
					className={classNames(styles.base, error != null && styles.error)}
					{...(props as any)}
					{...(register && register(name))}
				/>
			)}
			{error && <p className="mt-1 text-sm text-red-600 dark:text-red-600">{error.message}</p>}
		</>
	)
);

Input.displayName = 'Input';

export default Input;

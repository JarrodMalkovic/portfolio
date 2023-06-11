import Input from '@/components/Input';
import { classNames } from '@/utils/classNames';
import * as React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface IProps {
	label: string;
	name: string;
	register?: UseFormRegister<any>;
	htmlFor?: string;
	type?: React.HTMLInputTypeAttribute;
	isTextarea?: boolean;
	error?: FieldError;
	className?: string;
}

const InputField = ({ label, htmlFor, name, isTextarea = false, className, ...props }: IProps) => {
	return (
		<div className={classNames('w-full h-full', !!className && className)}>
			{label && (
				<label
					htmlFor={htmlFor}
					className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
				>
					{label}
				</label>
			)}
			<div className="mt-1">
				<Input name={name} isTextarea={isTextarea} {...props} />
			</div>
		</div>
	);
};

export default InputField;

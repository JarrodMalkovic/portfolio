import Input from '@/components/Input';
import * as React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface IProps {
	label: string;
	name: string;
	register?: UseFormRegister<any>;
	htmlFor?: string;
	type?: React.HTMLInputTypeAttribute;
	isTextarea?: boolean;
	error?: any;
}

const InputField = ({ label, htmlFor, name, isTextarea = false, ...props }: IProps) => {
	return (
		<div className="w-full h-full">
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

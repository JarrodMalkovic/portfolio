import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { recursiveMap } from '@/utils/recursiveMap';

interface FormProps {
	children: React.ReactNode;
	onSubmit: (data: any) => void;
	schema?: any;
}

const Form = ({ children, onSubmit, schema }: FormProps) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		mode: 'onTouched',
		resolver: yupResolver(schema),
	});

	return (
		<form className="" onSubmit={handleSubmit(onSubmit)}>
			{recursiveMap(children as React.ReactElement[], (child: React.ReactElement) => {
				return child.props.name
					? React.createElement(child.type, {
							...{
								...child.props,
								register,
								error: errors[child.props.name],
								key: child.props.name,
							},
					  })
					: child;
			})}
		</form>
	);
};

export default Form;

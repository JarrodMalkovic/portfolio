import Alert from '@/components/Alert';
import Button from '@/components/Button/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';
import { WEB3_FORMS_ACCESS_KEY, WEB3_FORMS_ENDPOINT } from '@/constants/web3Forms';
import { useMutation } from '@/hooks/useMutation';
import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

type ContactFormData = {
	name: string;
	email: string;
	subject: string;
	message: string;
	access_key?: string;
};

const schema = yup
	.object({
		name: yup.string().required('This field is required'),
		email: yup.string().email('Must be a valid email').required('This field is required'),
		subject: yup.string().required('This field is required'),
		message: yup.string().required('This field is required'),
	})
	.required();

const ContactForm = () => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
		setValue,
	} = useForm<ContactFormData>({
		mode: 'onTouched',
		resolver: yupResolver(schema),
	});

	const { mutate, isLoading, isError, isSuccess } = useMutation(WEB3_FORMS_ENDPOINT, {
		onSuccess: reset,
	});

	const onSubmit = (data: ContactFormData) => {
		setValue('access_key', WEB3_FORMS_ACCESS_KEY);
		mutate(data);
	};

	return (
		<form className="space-y-2 md:space-y-4" onSubmit={handleSubmit(onSubmit)}>
			{isSuccess && <Alert message="Placeholder" intent="success" />}
			{isError && <Alert message="Placeholder" intent="error" />}

			<div className="space-y-2 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
				<div>
					<Label htmlFor="name">Name</Label>
					<Input name="name" register={register} error={errors.name} />
				</div>
				<div>
					<Label htmlFor="email">Email</Label>
					<Input name="email" register={register} error={errors.email} />
				</div>
			</div>
			<div>
				<Label htmlFor="subject">Subject</Label>
				<Input name="subject" register={register} error={errors.subject} />
			</div>
			<div>
				<Label htmlFor="message">Message</Label>
				<Input name="message" isTextarea register={register} error={errors.message} />
			</div>
			<div className="float-right mt-10">
				<Button aria-label="Send message">{isLoading ? 'Sending...' : 'Send message'}</Button>
			</div>
		</form>
	);
};

export default ContactForm;

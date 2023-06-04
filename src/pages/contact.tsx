import type { NextPage } from 'next';
import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import PageHeading from '@/components/PageHeading';
import InputField from '@/components/InputField';
import * as yup from 'yup';
import * as React from 'react';
import { useMutation } from '@/hooks/useMutation';
import Alert from '@/components/Alert';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { WEB3_FORMS_ACCESS_KEY, WEB3_FORMS_ENDPOINT } from '@/constants/web3Forms';
import useTitle from '@/hooks/useTitle';

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

const Contact: NextPage = () => {
	useTitle('Jarrod Malkovic | Contact');

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
		<>
			<Navbar />
			<PageHeading>Placeholder.</PageHeading>
			<Container>
				<div className="space-y-8 sm:space-y-10">
					<div className="space-y-4">
						<h2 className="text-2xl font-semibold dark:text-white">Placeholder</h2>
						<p className="font-normal leading-6 tracking-wide text-md dark:text-slate-300">
							Placeholder
						</p>
					</div>

					<div>
						<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
							{isSuccess && <Alert message="Placeholder" status="success" />}
							{isError && <Alert message="Placeholder" status="error" />}

							<div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
								<InputField name="name" label="Name" register={register} error={errors.name} />
								<InputField name="email" label="Email" register={register} error={errors.email} />
							</div>
							<InputField
								name="subject"
								label="Subject"
								register={register}
								error={errors.subject}
							/>
							<InputField
								name="message"
								isTextarea
								label="Message"
								register={register}
								error={errors.message}
							/>
							<button
								className="p-2.5 float-right text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-md"
								type="submit"
							>
								{isLoading ? 'Sending...' : 'Send'}
							</button>
						</form>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Contact;

import Alert from '@/components/Alert';
import Container from '@/components/Container';
import InputField from '@/components/InputField';
import Navbar from '@/components/Navbar';
import PageHeading from '@/components/PageHeading';
import { WEB3_FORMS_ACCESS_KEY, WEB3_FORMS_ENDPOINT } from '@/constants/web3Forms';
import { useMutation } from '@/hooks/useMutation';
import useSeo from '@/hooks/useSeo';
import { yupResolver } from '@hookform/resolvers/yup';
import type { NextPage } from 'next';
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
		subject: yup.string(),
		message: yup.string().required('This field is required'),
	})
	.required();

const Contact: NextPage = () => {
	useSeo({ title: 'Jarrod Malkovic | Contact' });

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
				<div className="mb-10 space-y-4 md:space-y-10">
					<div className="space-y-2 md:space-y-4">
						<h2 className="text-2xl font-semibold dark:text-white">Placeholder</h2>
						<p className="font-normal leading-6 tracking-wide text-md dark:text-slate-300">
							Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder
							Placeholder Placeholder Placeholder Placeholder Placeholder
						</p>
					</div>

					<form className="space-y-2 md:space-y-4" onSubmit={handleSubmit(onSubmit)}>
						{isSuccess && <Alert message="Placeholder" status="success" />}
						{isError && <Alert message="Placeholder" status="error" />}

						<div className="space-y-2 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
							<InputField name="name" label="Name" register={register} error={errors.name} />
							<InputField name="email" label="Email" register={register} error={errors.email} />
						</div>
						<InputField
							className="hidden md:block"
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
						<div className="mt-10">
							<button
								className="p-2.5 mt-2 float-right text-white bg-black hover:bg-gray-900 dark:bg-slate-600 dark:hover:bg-slate-500 rounded-md md:w-48  w-full"
								type="submit"
								aria-label="Send message"
							>
								{isLoading ? 'Sending...' : 'Send message'}
							</button>
						</div>
					</form>
				</div>
			</Container>
		</>
	);
};

export default Contact;

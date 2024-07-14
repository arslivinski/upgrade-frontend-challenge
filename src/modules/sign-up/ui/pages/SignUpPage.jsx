import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button, Field, Input } from '@/ui/components';

import { SignUpTemplate } from '../components';
import { useSignUpContext, SignUpActions } from '../context/SignUpContext';

const schema = z.object({
	name: z.string().trim().min(1, 'The name is required'),
	email: z
		.string()
		.trim()
		.min(1, 'The e-mail is required')
		.email('Please provide a valid e-mail address'),
	password: z
		.string()
		.min(8, 'The password must have at least 8 characters')
		.refine((value) => /[a-z]/.test(value), {
			message: 'The password must have at least 1 lowercase character',
		})
		.refine((value) => /[A-Z]/.test(value), {
			message: 'The password must have at least 1 uppercase character',
		})
		.refine((value) => /[0-9]/.test(value), {
			message: 'The password must have at least 1 digit',
		})
		.refine((value) => /\W/.test(value), {
			message: 'The password must have at least 1 special character',
		}),
});

export function SignUpPage() {
	const { state, dispatch } = useSignUpContext();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
		values: state.data,
	});

	function handleSubmitForm(payload) {
		dispatch({ type: SignUpActions.next, payload });
	}

	return (
		<form onSubmit={handleSubmit(handleSubmitForm)} noValidate>
			<SignUpTemplate title="Sign Up" actions={<Button type="submit">Next</Button>}>
				<Field label="First Name" error={errors.name?.message}>
					<Input {...register('name')} id="name" autoComplete="given-name" required />
				</Field>
				<Field label="E-mail" error={errors.email?.message}>
					<Input {...register('email')} id="email" type="email" autoComplete="email" required />
				</Field>
				<Field label="Password" error={errors.password?.message}>
					<Input
						{...register('password')}
						id="password"
						type="password"
						autoComplete="new-password"
						required
					/>
				</Field>
			</SignUpTemplate>
		</form>
	);
}

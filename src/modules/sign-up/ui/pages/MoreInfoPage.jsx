import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Alert, Button, Checkbox, Field, Select } from '@/ui/components';

import { getColors } from '../../infra/getColors';
import { formatColor } from '../../presenters/ColorPresenter';
import { SignUpTemplate } from '../components';
import { useSignUpContext, SignUpActions } from '../context/SignUpContext';

const title = 'Additional Info';

const schema = z.object({
	color: z.string().trim().min(1, 'This field is required'),
	terms: z
		.boolean()
		.refine((value) => value, { message: 'You must agree to Terms and Conditions to proceed' }),
});

export function MoreInfoPage() {
	const { state, dispatch } = useSignUpContext();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
		values: state.data,
	});

	const { isPending, isError, data, error } = useQuery({
		queryKey: ['colors'],
		queryFn: getColors,
	});

	function handleClickBack() {
		dispatch({ type: SignUpActions.prev });
	}

	function onSubmit(payload) {
		console.log('Submit', payload);
		dispatch({ type: SignUpActions.next, payload });
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<SignUpTemplate
				title={title}
				actions={
					<>
						<Button onClick={handleClickBack}>Back</Button>
						<Button type="submit" disabled={isPending || isError}>
							Next
						</Button>
					</>
				}
			>
				{isError ? (
					<div>Error: {error.message}</div>
				) : (
					<>
						<Field
							label="Select your favorite color"
							description={isPending ? 'Loading data...' : undefined}
							error={errors.color?.message}
						>
							<Select {...register('color')} id="color" disabled={isPending} required>
								<option></option>
								{data?.map((color) => (
									<option key={color} value={color}>
										{formatColor(color)}
									</option>
								))}
							</Select>
						</Field>
						<Checkbox {...register('terms')} id="terms">
							I agree to <a href="#">Terms and Conditions</a>
						</Checkbox>
						{errors.terms?.message && <Alert>{errors.terms?.message}</Alert>}
					</>
				)}
			</SignUpTemplate>
		</form>
	);
}

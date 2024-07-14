import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Button } from '@/ui/components';

import { postSubmit } from '../../infra/postSubmit';
import { formatColor } from '../../presenters/ColorPresenter';
import { SignUpTemplate } from '../components';
import { useSignUpContext, SignUpActions, SignUpSteps } from '../context/SignUpContext';

const title = 'Confirmation';

export function ConfirmationPage() {
	const { state, dispatch } = useSignUpContext();

	const mutation = useMutation({
		mutationFn: postSubmit,
	});

	useEffect(() => {
		if (mutation.isSuccess) {
			dispatch({ type: SignUpActions.next });
		}

		if (mutation.isError) {
			dispatch({ type: SignUpActions.error });
		}
	}, [mutation.isSuccess, mutation.isError]);

	function handleClickBack() {
		dispatch({ type: SignUpActions.prev });
	}

	function handleClickSubmit() {
		mutation.mutate(state.data);
	}

	if (state.step !== SignUpSteps.confirm) {
		return null;
	}

	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<SignUpTemplate
				title={title}
				actions={
					<>
						<Button onClick={handleClickBack}>Back</Button>
						<Button onClick={handleClickSubmit} disabled={mutation.isPending}>
							{mutation.isPending ? 'Submitting...' : 'Submit'}
						</Button>
					</>
				}
			>
				<ul>
					<li>First name: {state.data.name}</li>
					<li>E-mail: {state.data.email}</li>
					<li>Password: ********</li>
					<li>Favorite color: {formatColor(state.data.color)}</li>
					<li>Terms and Conditions: Agreed</li>
				</ul>
			</SignUpTemplate>
		</>
	);
}

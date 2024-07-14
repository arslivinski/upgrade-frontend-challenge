import { IconCircleX } from '@tabler/icons-react';
import { Helmet } from 'react-helmet-async';

import { Button } from '@/ui/components';

import { Message, SignUpTemplate } from '../components';
import { useSignUpContext, SignUpActions } from '../context/SignUpContext';

const title = 'Error';

export function ErrorPage() {
	const { dispatch } = useSignUpContext();

	function handleClickRestart() {
		dispatch({ type: SignUpActions.reset });
	}

	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<SignUpTemplate title={title} actions={<Button onClick={handleClickRestart}>Restart</Button>}>
				<Message>
					<IconCircleX stroke={2} size={48} />
					Uh oh, something went wrong. Please try again later.
				</Message>
			</SignUpTemplate>
		</>
	);
}

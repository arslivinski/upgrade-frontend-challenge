import { IconCircleCheck } from '@tabler/icons-react';
import { Helmet } from 'react-helmet-async';

import { Button } from '@/ui/components';

import { Message, SignUpTemplate } from '../components';
import { useSignUpContext, SignUpActions } from '../context/SignUpContext';

const title = 'Success!';

export function SuccessPage() {
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
					<IconCircleCheck stroke={2} size={48} />
					You should receive a confirmation e-mail soon.
				</Message>
			</SignUpTemplate>
		</>
	);
}

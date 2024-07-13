import { Button } from '@/ui/components';

import { useSignUpContext, SignUpActions } from '../context/SignUpContext';

export function SignUpPage() {
	const { dispatch } = useSignUpContext();

	return (
		<div>
			<h1>Sign Up</h1>
			<Button
				onClick={() => {
					dispatch({ type: SignUpActions.next });
				}}
			>
				Next
			</Button>
		</div>
	);
}

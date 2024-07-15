import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';

import { QueryProvider } from '@/ui/context/QueryContext';

import { SignUpContext } from '../context/SignUpContext';
import { ConfirmationPage } from './ConfirmationPage';

jest.mock('@/modules/sign-up/infra/postSubmit', () => ({
	postSubmit: ({ name }) => (name === 'Error' ? Promise.reject() : Promise.resolve()),
}));

function setup(initialState) {
	const state = initialState ?? {};
	const dispatch = jest.fn();
	const value = [state, dispatch];

	const utils = render(
		<HelmetProvider>
			<QueryProvider>
				<SignUpContext.Provider value={value}>
					<ConfirmationPage />
				</SignUpContext.Provider>
			</QueryProvider>
		</HelmetProvider>,
	);

	return { ...utils, $SignUpContext: value };
}

describe('ConfirmationPage', () => {
	it('should work correctly', async () => {
		const state = {
			step: 'confirmation',
			data: {
				name: 'John',
				email: 'john@test.com',
				password: '12345678aA!',
				color: 'black',
				terms: true,
			},
		};

		const { $SignUpContext } = setup(state);
		const [, dispatch] = $SignUpContext;

		expect(screen.getByText('Confirmation')).toBeInTheDocument();

		expect(screen.getByText('First name: John')).toBeInTheDocument();
		expect(screen.getByText('E-mail: john@test.com')).toBeInTheDocument();
		expect(screen.getByText('Password: ********')).toBeInTheDocument();
		expect(screen.getByText('Favorite color: Black')).toBeInTheDocument();
		expect(screen.getByText('Terms and Conditions: Agreed')).toBeInTheDocument();

		const back = screen.queryByRole('button', { name: 'Back' });
		expect(back).toBeInTheDocument();

		const submit = screen.queryByRole('button', { name: 'Submit' });
		expect(submit).toBeInTheDocument();

		// Submit and go to succes page

		await userEvent.click(submit);

		expect(dispatch).toHaveBeenCalledTimes(1);
		expect(dispatch).toHaveBeenNthCalledWith(1, { type: 'next' });

		// Click on the Back button

		await userEvent.click(back);

		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(dispatch).toHaveBeenNthCalledWith(2, { type: 'prev' });
	});

	it('should go to the error page if the request failed', async () => {
		const state = {
			step: 'confirmation',
			data: {
				name: 'Error',
				email: 'john@test.com',
				password: '12345678aA!',
				color: 'black',
				terms: true,
			},
		};

		const { $SignUpContext } = setup(state);
		const [, dispatch] = $SignUpContext;

		const submit = screen.queryByRole('button', { name: 'Submit' });
		expect(submit).toBeInTheDocument();

		// Submit and go to succes page

		await userEvent.click(submit);

		expect(dispatch).toHaveBeenCalledTimes(1);
		expect(dispatch).toHaveBeenNthCalledWith(1, { type: 'error' });
	});
});

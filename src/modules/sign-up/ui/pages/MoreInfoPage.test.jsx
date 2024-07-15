import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';

import { QueryProvider } from '@/ui/context/QueryContext';

import { SignUpContext } from '../context/SignUpContext';
import { MoreInfoPage } from './MoreInfoPage';

jest.mock('../../infra/getColors', () => ({
	getColors: () => Promise.resolve(['black', 'white']),
}));

function setup(initialState) {
	const state = initialState ?? {};
	const dispatch = jest.fn();
	const value = [state, dispatch];

	const utils = render(
		<HelmetProvider>
			<QueryProvider>
				<SignUpContext.Provider value={value}>
					<MoreInfoPage />
				</SignUpContext.Provider>
			</QueryProvider>
		</HelmetProvider>,
	);

	return { ...utils, $SignUpContext: value };
}

describe('MoreInfoPage', () => {
	it('should render without crash', () => {
		setup();

		expect(screen.getByText('Additional Info')).toBeInTheDocument();

		const color = screen.queryByLabelText('Select your favorite color');
		expect(color).toBeInTheDocument();

		const terms = screen.queryByLabelText('I agree to Terms and Conditions');
		expect(terms).toBeInTheDocument();

		const back = screen.queryByRole('button', { name: 'Back' });
		expect(back).toBeInTheDocument();

		const next = screen.queryByRole('button', { name: 'Next' });
		expect(next).toBeInTheDocument();
	});

	it('should work correctly', async () => {
		const { $SignUpContext } = setup();
		const [, dispatch] = $SignUpContext;

		const color = screen.getByLabelText('Select your favorite color');
		const terms = screen.getByLabelText('I agree to Terms and Conditions');
		const back = screen.getByRole('button', { name: 'Back' });
		const next = screen.getByRole('button', { name: 'Next' });

		// Await for the data loading

		await waitFor(() => {
			expect(screen.queryByText('Loading data...')).not.toBeInTheDocument();
		});

		// Submit without filling any field

		await userEvent.click(next);

		expect(screen.getByText('This color is required')).toBeInTheDocument();
		expect(
			screen.getByText('You must agree to Terms and Conditions to proceed'),
		).toBeInTheDocument();
		expect(dispatch).not.toHaveBeenCalled();

		// Select a color and re-submit

		await userEvent.selectOptions(color, 'black');
		await userEvent.click(next);

		expect(screen.queryByText('This color is required')).not.toBeInTheDocument();
		expect(
			screen.getByText('You must agree to Terms and Conditions to proceed'),
		).toBeInTheDocument();
		expect(dispatch).not.toHaveBeenCalled();

		// Agree with the terms and conditions and re-submit

		await userEvent.click(terms);
		await userEvent.click(next);

		expect(screen.queryByText('This color is required')).not.toBeInTheDocument();
		expect(
			screen.queryByText('You must agree to Terms and Conditions to proceed'),
		).not.toBeInTheDocument();

		expect(dispatch).toHaveBeenCalledTimes(1);
		expect(dispatch).toHaveBeenNthCalledWith(1, {
			type: 'next',
			payload: {
				color: 'black',
				terms: true,
			},
		});

		// Click on the Back button

		await userEvent.click(back);

		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(dispatch).toHaveBeenNthCalledWith(2, { type: 'prev' });
	});
});

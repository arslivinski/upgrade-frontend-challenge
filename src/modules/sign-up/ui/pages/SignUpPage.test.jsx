import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { SignUpContext } from '../context/SignUpContext';
import { SignUpPage } from './SignUpPage';

function setup(initialState) {
	const state = initialState ?? {};
	const dispatch = jest.fn();
	const value = [state, dispatch];

	const utils = render(
		<SignUpContext.Provider value={value}>
			<SignUpPage />
		</SignUpContext.Provider>,
	);

	return { ...utils, $SignUpContext: value };
}

describe('SignUpPage', () => {
	it('should render without crash', () => {
		setup();

		expect(screen.getByText('Sign Up')).toBeInTheDocument();

		const name = screen.queryByLabelText('First Name');
		expect(name).toBeInTheDocument();

		const email = screen.queryByLabelText('E-mail');
		expect(email).toBeInTheDocument();

		const password = screen.queryByLabelText('Password');
		expect(password).toBeInTheDocument();

		const next = screen.queryByRole('button');
		expect(next).toBeInTheDocument();
	});

	it('should work correctly', async () => {
		const { $SignUpContext } = setup();
		const [, dispatch] = $SignUpContext;

		const name = screen.getByLabelText('First Name');
		const email = screen.getByLabelText('E-mail');
		const password = screen.getByLabelText('Password');
		const next = screen.getByRole('button');

		// Submit without filling any field
		await userEvent.click(next);

		expect(screen.getByText('The name is required')).toBeInTheDocument();
		expect(screen.getByText('The e-mail is required')).toBeInTheDocument();
		expect(screen.getByText('The password must have at least 8 characters')).toBeInTheDocument();
		expect(dispatch).not.toHaveBeenCalled();

		// Fill the First Name and re-submit

		await userEvent.type(name, 'John');
		await userEvent.click(next);

		expect(name).toHaveValue('John');
		expect(screen.queryByText('The name is required')).not.toBeInTheDocument();
		expect(dispatch).not.toHaveBeenCalled();

		// Fill the E-mail with an invalid address and re-submit

		await userEvent.type(email, 'john');
		await userEvent.click(next);

		expect(email).toHaveValue('john');
		expect(screen.queryByText('The e-mail is required')).not.toBeInTheDocument();
		expect(screen.getByText('Please provide a valid e-mail address')).toBeInTheDocument();
		expect(dispatch).not.toHaveBeenCalled();

		// Fill the E-mail with an valid address and re-submit

		await userEvent.clear(email);
		await userEvent.type(email, 'john@test.com');
		await userEvent.click(next);

		expect(email).toHaveValue('john@test.com');
		expect(screen.queryByText('The e-mail is required')).not.toBeInTheDocument();
		expect(screen.queryByText('Please provide a valid e-mail address')).not.toBeInTheDocument();
		expect(dispatch).not.toHaveBeenCalled();

		// Insert a password longer than 8 characters

		await userEvent.type(password, '0123456789');
		await userEvent.click(next);

		expect(password).toHaveValue('0123456789');
		expect(
			screen.queryByText('The password must have at least 8 characters'),
		).not.toBeInTheDocument();
		expect(
			screen.getByText('The password must have at least 1 lowercase character'),
		).toBeInTheDocument();
		expect(dispatch).not.toHaveBeenCalled();

		// Insert a password longer than 8 characters, with 1 lowercase character

		await userEvent.clear(password);
		await userEvent.type(password, '0123456789a');
		await userEvent.click(next);

		expect(password).toHaveValue('0123456789a');
		expect(
			screen.queryByText('The password must have at least 8 characters'),
		).not.toBeInTheDocument();
		expect(
			screen.queryByText('The password must have at least 1 lowercase character'),
		).not.toBeInTheDocument();
		expect(
			screen.getByText('The password must have at least 1 uppercase character'),
		).toBeInTheDocument();
		expect(dispatch).not.toHaveBeenCalled();

		// Insert a password longer than 8 characters, with 1 lowercase and 1 uppercase characters

		await userEvent.clear(password);
		await userEvent.type(password, '0123456789aA');
		await userEvent.click(next);

		expect(password).toHaveValue('0123456789aA');
		expect(
			screen.queryByText('The password must have at least 8 characters'),
		).not.toBeInTheDocument();
		expect(
			screen.queryByText('The password must have at least 1 lowercase character'),
		).not.toBeInTheDocument();
		expect(
			screen.queryByText('The password must have at least 1 uppercase character'),
		).not.toBeInTheDocument();
		expect(
			screen.getByText('The password must have at least 1 special character'),
		).toBeInTheDocument();
		expect(dispatch).not.toHaveBeenCalled();

		// Insert a valid password and re-submit, which must work

		await userEvent.clear(password);
		await userEvent.type(password, '0123456789aA!');
		await userEvent.click(next);

		expect(password).toHaveValue('0123456789aA!');
		expect(
			screen.queryByText('The password must have at least 8 characters'),
		).not.toBeInTheDocument();
		expect(
			screen.queryByText('The password must have at least 1 lowercase character'),
		).not.toBeInTheDocument();
		expect(
			screen.queryByText('The password must have at least 1 uppercase character'),
		).not.toBeInTheDocument();
		expect(
			screen.queryByText('The password must have at least 1 special character'),
		).not.toBeInTheDocument();

		expect(dispatch).toHaveBeenCalledTimes(1);
		expect(dispatch).toHaveBeenCalledWith({
			type: 'next',
			payload: {
				name: 'John',
				email: 'john@test.com',
				password: '0123456789aA!',
			},
		});
	});
});

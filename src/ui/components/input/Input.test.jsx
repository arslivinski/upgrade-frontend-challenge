import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { Input } from './Input';

describe('Input', () => {
	it('should render without crash', () => {
		render(<Input />);

		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	it('should work correctly', async () => {
		render(<Input />);

		const input = screen.queryByRole('textbox');

		expect(input).toBeInTheDocument();

		await userEvent.type(input, 'Test');

		expect(input).toHaveValue('Test');
	});
});

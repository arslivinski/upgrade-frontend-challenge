import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
	it('should render without crash', () => {
		render(<Checkbox />);

		expect(screen.getByRole('checkbox')).toBeInTheDocument();
	});

	it('should render the label correctly', () => {
		render(<Checkbox>Label</Checkbox>);

		expect(screen.getByLabelText('Label')).toBeInTheDocument();
	});

	it('should work correctly', async () => {
		render(<Checkbox />);

		const checkbox = screen.queryByRole('checkbox');

		expect(checkbox).toBeInTheDocument();
		expect(checkbox).not.toBeChecked();

		await userEvent.click(checkbox);

		expect(checkbox).toBeChecked();

		await userEvent.click(checkbox);

		expect(checkbox).not.toBeChecked();
	});
});

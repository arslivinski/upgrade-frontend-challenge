import { render, screen } from '@testing-library/react';

import { Input } from '../input';
import { Field } from './Field';

describe('Field', () => {
	it('should render without crash', () => {
		render(
			<Field>
				<Input />
			</Field>,
		);

		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	it('should render the label and description correctly', () => {
		render(
			<Field label="Label" description="Description">
				<Input />
			</Field>,
		);

		expect(screen.getByLabelText('Label')).toBeInTheDocument();
		expect(screen.getByText('Description')).toBeInTheDocument();
	});

	it('should render the error instead of the description if present', () => {
		render(
			<Field label="Label" description="Description" error="Error">
				<Input />
			</Field>,
		);

		expect(screen.getByLabelText('Label')).toBeInTheDocument();
		expect(screen.queryByText('Description')).not.toBeInTheDocument();
		expect(screen.getByText('Error')).toBeInTheDocument();
	});
});

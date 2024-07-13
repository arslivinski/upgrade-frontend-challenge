import { render, screen } from '@testing-library/react';

import { Select } from './Select';

describe('Select', () => {
	it('should render without crash', () => {
		render(<Select />);

		expect(screen.getByRole('combobox')).toBeInTheDocument();
	});
});

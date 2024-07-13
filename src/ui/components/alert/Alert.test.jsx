import { render, screen } from '@testing-library/react';

import { Alert } from './Alert';

describe('Alert', () => {
	it('should render without crash', () => {
		render(<Alert>Test</Alert>);

		const alert = screen.queryByRole('alert');

		expect(alert).toBeInTheDocument();
		expect(alert).toHaveTextContent('Test');
	});
});

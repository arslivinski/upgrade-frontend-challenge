import { render, screen } from '@testing-library/react';

import { Message } from './Message';

describe('Message', () => {
	it('should render without crash', () => {
		render(<Message>Test</Message>);

		expect(screen.getByText('Test')).toBeInTheDocument();
	});
});

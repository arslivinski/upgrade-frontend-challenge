import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
	it('should render without crash', () => {
		render(<Button>Test</Button>);

		expect(screen.getByRole('button')).toHaveTextContent('Test');
	});
});

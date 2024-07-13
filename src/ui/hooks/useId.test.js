import { renderHook } from '@testing-library/react';

import { useId } from './useId';

const mockedUseIdReturn = 'mocked react/useId return';

jest.mock('react', () => {
	const react = jest.requireActual('react');

	return {
		...react,
		useId: () => mockedUseIdReturn,
	};
});

describe('useId', () => {
	it('should return the provided `id`', () => {
		const id = 'test-id';

		const { result } = renderHook(() => useId(id));

		expect(result.current).toBe(id);
	});

	it('should return a generated `id` if no `id` is provided', () => {
		const { result } = renderHook(() => useId());

		expect(result.current).toBe(mockedUseIdReturn);
	});
});

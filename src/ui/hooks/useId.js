import { useId as reactUseId } from 'react';

/**
 * Hook that will generate and return a stable ID to be used on components.
 *
 * @param {string} [id]
 * @returns The provided id or a generated and stable one
 */
export function useId(id) {
	const generatedId = reactUseId();
	return id || generatedId;
}

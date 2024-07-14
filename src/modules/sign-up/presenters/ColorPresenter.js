/**
 * @param {string} color
 * @returns {string}
 */
export function formatColor(color) {
	const [first, ...rest] = color;
	return `${first.toUpperCase()}${rest.join('')}`;
}

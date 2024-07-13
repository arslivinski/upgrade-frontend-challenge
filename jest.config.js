/** @import { Config } from 'jest' */

/**
 * @see https://jestjs.io/docs/configuration
 * @type {Config}
 */
const config = {
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^@/(.*)': '<rootDir>/src/$1',
	},
};

export default config;

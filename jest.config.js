/** @import { Config } from 'jest' */

/**
 * @see https://jestjs.io/docs/configuration
 * @type {Config}
 */
const config = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
		'^@/(.*)': '<rootDir>/src/$1',
		'\\.css$': '<rootDir>/node_modules/jest-css-modules',
	},
	transformIgnorePatterns: ['/node_modules/(?!(ky)/)'],
};

export default config;

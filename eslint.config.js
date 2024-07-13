import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJest from 'eslint-plugin-jest';

/** @import { Linter } from 'eslint' */

/**
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 * @type { Array<Linter.FlatConfig> }
 */
const config = [
	{
		ignores: ['node_modules/', 'coverage/', 'build/'],
	},
	{
		files: ['src/**/*.js', 'src/**/*.jsx', 'server/**/*.js'],
		linterOptions: {
			reportUnusedDisableDirectives: 'error',
		},
		languageOptions: {
			ecmaVersion: 2024,
			parserOptions: {
				sourceType: 'module',
			},
			globals: {
				...globals.browser,
			},
		},
		rules: {
			...js.configs.recommended.rules,
		},
	},
	{
		files: ['src/**/*.jsx'],
		plugins: {
			react: pluginReact,
			'react-hooks': pluginReactHooks,
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			...pluginReact.configs['recommended'].rules,
			...pluginReact.configs['jsx-runtime'].rules,
			...pluginReactHooks.configs['recommended'].rules,

			'react/prop-types': 'off',
		},
	},
	{
		files: ['src/**/*.test.*', 'server/**/*.test.*'],
		languageOptions: {
			globals: {
				...globals.jest,
			},
		},
		plugins: {
			jest: pluginJest,
		},
    rules: {
      ...pluginJest.configs['flat/recommended'].rules,
    },
	},
];

export default config;

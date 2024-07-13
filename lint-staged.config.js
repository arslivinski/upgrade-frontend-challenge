/**
 * @see https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration
 */
const config = {
	'*': 'prettier --write --ignore-unknown',
	'(src|server)/**/*.{js,jsx}': 'eslint --quiet',
};

export default config;

/** @import { Config } from 'prettier' */

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type { Config }
 */
const config = {
	/**
	 * One good practice from the Clean Code is to use descriptive names. Because
	 * of that, some lines could get really long. However, IMHO, the Prettier
	 * algorithm makes the code less readable with 80 columns than with 100.
	 */
	printWidth: 100,

	/**
	 * Eternal discussion between spaces and tabs, however this is an acessebility
	 * issue. E.g.: If using identation with four spaces, in a two levels deep
	 * identation, screen readers would have to read 8 characters instead of just
	 * two if using tabs. Also, tabs allows the developers to change the tab's
	 * width on their editors if they found that the default width of 2 is too
	 * small.
	 */
	useTabs: true,
	tabWidth: 2,

	/**
	 * Using an US keyboard layout, you can have quotes with a single keypress
	 * by using single quotes.
	 */
	singleQuote: true,
};

export default config;

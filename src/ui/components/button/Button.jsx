import { forwardRef } from 'react';
import { clsx } from 'clsx';

import { button } from './Button.module.css';

/** @import { ButtonComponent } from './Button.types' */

/**
 * @type {ButtonComponent}
 */
export const Button = forwardRef(function Button(props, ref) {
	const className = clsx(button, props.className);

	return <button ref={ref} type="button" {...props} className={className} />;
});

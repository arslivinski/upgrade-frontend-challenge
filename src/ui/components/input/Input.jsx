import { forwardRef } from 'react';
import { clsx } from 'clsx';

import { input } from './Input.module.css';

/** @import { InputComponent } from './Input.types' */

/**
 * @type {InputComponent}
 */
export const Input = forwardRef(function Input(props, ref) {
	const className = clsx(input, props.className);

	return <input ref={ref} type="text" {...props} className={className} />;
});

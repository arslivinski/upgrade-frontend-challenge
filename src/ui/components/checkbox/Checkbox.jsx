import { forwardRef } from 'react';
import { clsx } from 'clsx';

import * as styles from './Checkbox.module.css';

/** @import { CheckboxComponent } from './Checkbox.types' */

/**
 * @type {CheckboxComponent}
 */
export const Checkbox = forwardRef(function Checkbox({ children, ...props }, ref) {
	const className = clsx(styles.checkbox, props.className);

	const checkbox = <input ref={ref} {...props} type="checkbox" className={className} />;

	if (!children) {
		return checkbox;
	}

	return (
		<label className={styles.label}>
			{checkbox}
			{children}
		</label>
	);
});

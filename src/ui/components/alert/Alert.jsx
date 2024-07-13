import { forwardRef } from 'react';
import { clsx } from 'clsx';

import { alert } from './Alert.module.css';

/** @import { AlertComponent } from './Alert.types' */

/**
 * @type {AlertComponent}
 */
export const Alert = forwardRef(function Alert(props, ref) {
	const className = clsx(alert, props.className);

	return <div ref={ref} {...props} role="alert" className={className} />;
});

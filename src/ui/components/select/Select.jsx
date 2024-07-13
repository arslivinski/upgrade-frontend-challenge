import { forwardRef } from 'react';
import { clsx } from 'clsx';

import { select } from './Select.module.css';

/** @import { SelectComponent } from './Select.types' */

/**
 * @type {SelectComponent}
 */
export const Select = forwardRef(function Select(props, ref) {
	const className = clsx(select, props.className);

	return <select ref={ref} {...props} className={className} />;
});

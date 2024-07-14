import { forwardRef } from 'react';
import { clsx } from 'clsx';

import { message } from './Message.module.css';

/** @import { MessageComponent } from './Message.types' */

/**
 * @type {MessageComponent}
 */
export const Message = forwardRef(function Message(props, ref) {
	const className = clsx(message, props.className);

	return <div ref={ref} {...props} className={className} />;
});

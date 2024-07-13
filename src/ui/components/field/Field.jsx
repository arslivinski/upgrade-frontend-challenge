import { Children, cloneElement, forwardRef } from 'react';
import { clsx } from 'clsx';

import { useId } from '@/ui/hooks';

import * as styles from './Field.module.css';

/** @import { FieldComponent } from './Field.types' */

/**
 * @type {FieldComponent}
 */
export const Field = forwardRef(function Field(allProps, ref) {
	const { label, description, error, children, ...props } = allProps;

	const prevElement = Children.only(children);

	const required = prevElement.props.required;

	const idElement = useId(prevElement.props.id);
	const idLabel = `${idElement}-label`;
	const idDescription = `${idElement}-description`;
	const idError = `${idElement}-error`;

	const element = cloneElement(prevElement, {
		id: idElement,
		'aria-describedby': error ? idError : description ? idDescription : undefined,
	});

	const classNames = clsx(styles.field, props.className);

	return (
		<div ref={ref} {...props} className={classNames}>
			{label && (
				<label
					id={idLabel}
					className={styles.label}
					htmlFor={idElement}
					data-required={required || undefined}
				>
					{label}
				</label>
			)}
			{element}
			{description && !error && <div id={idDescription}>{description}</div>}
			{error && (
				<div id={idError} className={styles.error}>
					{error}
				</div>
			)}
		</div>
	);
});

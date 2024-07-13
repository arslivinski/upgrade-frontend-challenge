import * as styles from './SignUpTemplate.module.css';

/** @import { ReactNode } from 'react' */

/**
 * @param {Object} props
 * @param {string} [props.title]
 * @param {ReactNode} [props.children]
 * @param {ReactNode} [props.actions]
 */
export function SignUpTemplate({ title, children, actions }) {
	return (
		<main className={styles.template}>
			{title && <h1 className={styles.title}>{title}</h1>}
			<div className={styles.content}>{children}</div>
			{actions && <div className={styles.actions}>{actions}</div>}
		</main>
	);
}

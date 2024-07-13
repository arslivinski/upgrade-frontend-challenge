import {
	DetailedHTMLProps,
	ForwardRefExoticComponent,
	InputHTMLAttributes,
	PropsWithoutRef,
	ReactNode,
	RefAttributes,
} from 'react';

export interface CheckboxProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	children?: ReactNode;
}

export interface CheckboxComponent
	extends ForwardRefExoticComponent<
		PropsWithoutRef<CheckboxProps> & RefAttributes<HTMLInputElement>
	> {}

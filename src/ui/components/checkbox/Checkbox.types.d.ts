import {
	DetailedHTMLProps,
	ForwardRefExoticComponent,
	InputHTMLAttributes,
	PropsWithoutRef,
	RefAttributes,
} from 'react';

export interface CheckboxProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	label?: string;
}

export interface CheckboxComponent
	extends ForwardRefExoticComponent<
		PropsWithoutRef<CheckboxProps> & RefAttributes<HTMLInputElement>
	> {}

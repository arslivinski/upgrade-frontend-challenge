import {
	DetailedHTMLProps,
	ForwardRefExoticComponent,
	InputHTMLAttributes,
	PropsWithoutRef,
	RefAttributes,
} from 'react';

export interface InputProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export interface InputComponent
	extends ForwardRefExoticComponent<
		PropsWithoutRef<InputProps> & RefAttributes<HTMLInputElement>
	> {}

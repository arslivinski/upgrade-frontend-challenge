import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	ForwardRefExoticComponent,
	PropsWithoutRef,
	RefAttributes,
} from 'react';

export interface ButtonProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export interface ButtonComponent
	extends ForwardRefExoticComponent<
		PropsWithoutRef<ButtonProps> & RefAttributes<HTMLButtonElement>
	> {}

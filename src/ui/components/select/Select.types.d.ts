import {
	DetailedHTMLProps,
	ForwardRefExoticComponent,
	PropsWithoutRef,
	RefAttributes,
	SelectHTMLAttributes,
} from 'react';

export interface SelectProps
	extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {}

export interface SelectComponent
	extends ForwardRefExoticComponent<
		PropsWithoutRef<SelectProps> & RefAttributes<HTMLSelectElement>
	> {}

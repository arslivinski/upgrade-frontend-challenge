import {
	ButtonHTMLAttributes,
	ForwardRefExoticComponent,
	HTMLAttributes,
	PropsWithoutRef,
	RefAttributes,
} from 'react';

export interface FieldProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	label?: string;
	description?: string;
	error?: string;
}

export interface FieldComponent
	extends ForwardRefExoticComponent<PropsWithoutRef<FieldProps> & RefAttributes<HTMLDivElement>> {}

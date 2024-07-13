import {
	ButtonHTMLAttributes,
	ForwardRefExoticComponent,
	HTMLAttributes,
	PropsWithoutRef,
	RefAttributes,
} from 'react';

export interface AlertProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface AlertComponent
	extends ForwardRefExoticComponent<PropsWithoutRef<AlertProps> & RefAttributes<HTMLDivElement>> {}

import { ForwardRefExoticComponent, HTMLAttributes, PropsWithoutRef, RefAttributes } from 'react';

export interface MessageProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface MessageComponent
	extends ForwardRefExoticComponent<
		PropsWithoutRef<MessageProps> & RefAttributes<HTMLDivElement>
	> {}

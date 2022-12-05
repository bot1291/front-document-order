import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IEmployee } from '../../interfaces/employee';

export interface DropMenuProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLSelectElement>,
		HTMLSelectElement
	> {
	employees: IEmployee[];
	defaultText?: string;
}

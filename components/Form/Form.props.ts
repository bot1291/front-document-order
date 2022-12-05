import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IEmployee } from '../../interfaces/employee';

export interface FormProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLFormElement>,
		HTMLFormElement
	> {
		employees: IEmployee[];
	}

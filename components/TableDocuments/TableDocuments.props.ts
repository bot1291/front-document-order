import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IDocument } from '../../pages/table';

export interface TableDocumentsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	allDocuments: IDocument[];
}

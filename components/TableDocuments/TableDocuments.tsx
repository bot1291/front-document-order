import { TableDocumentsProps } from './TableDocuments.props';
import styles from './TableDocuments.module.css';

export const TableDocuments = ({
	allDocuments,
	className,
	...props
}: TableDocumentsProps): JSX.Element => {
	return <div className={`${className} ${styles.table}`} {...props}></div>;
};


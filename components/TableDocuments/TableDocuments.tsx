import { TableDocumentsProps } from './TableDocuments.props';
import styles from './TableDocuments.module.css';

export const TableDocuments = ({
	allDocuments,
	className,
	...props
}: TableDocumentsProps): JSX.Element => {
	return (
		<div className={`${className} ${styles.table}`} {...props}>
			{allDocuments.map((d) => (
				<div key={d.document}>
					<div className={styles.documentBlock} key={d.document}>
						<span className={styles.title}>{d.document}</span>
						<hr className={styles.hrVertical} />
						<span>{d.count}</span>
					</div>
					<hr className={styles.hrGorisontal} />
				</div>
			))}
		</div>
	);
};

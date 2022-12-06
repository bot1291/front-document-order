import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, TableDocuments } from '../components';
import { IEmployee } from '../interfaces/employee';
import styles from '../styles/Table.module.css';

export default function Table({ employees }: TableProps) {
	const [allDocuments, setAllDocuments] = useState<IDocument[]>([]);

	useEffect(() => {
		const allDocuments: string[] = [];
		employees.map((e) => allDocuments.push(...e.documents));
		const objectCountDocuments = allDocuments.reduce(
			(object: { [key: string]: number }, currentDocument) => {
				if (!object[currentDocument]) {
					object[currentDocument] = 0;
				}
				object[currentDocument]++;
				return object;
			},
			{}
		);
		const arrayOfDocumentsAndCount: IDocument[] = [];
		for (const key in objectCountDocuments) {
			arrayOfDocumentsAndCount.push({
				count: objectCountDocuments[key],
				document: key,
			});
		}
		arrayOfDocumentsAndCount.sort((a, b) => (a.count < b.count ? 1 : -1));
		setAllDocuments(arrayOfDocumentsAndCount);
	}, []);

	return (
		<div className={styles.table}>
			<TableDocuments allDocuments={allDocuments} />
			<Link href="/">
				<Button className={styles.button}>Перейти к форме</Button>
			</Link>
		</div>
	);
}

export const getStaticProps: GetStaticProps<TableProps> = async () => {
	try {
		const employees: IEmployee[] = await fetch(
			'http://localhost:5000/api/employees',
			{
				method: 'GET',
				credentials: 'include',
			}
		)
			.then((response) => response.json())
			.catch((e: Error) => {
				console.log(e.message);
			});

		if (!employees) {
			return {
				notFound: true,
			};
		}

		return {
			props: {
				employees,
			},
		};
	} catch {
		return {
			notFound: true,
		};
	}
};

export interface TableProps extends Record<string, unknown> {
	employees: IEmployee[];
}

export interface IDocument {
	count: number;
	document: string;
}

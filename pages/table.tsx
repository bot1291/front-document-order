import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, Form } from '../components';
import { IEmployee } from '../interfaces/employee';
import styles from '../styles/Home.module.css';

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
		setAllDocuments(arrayOfDocumentsAndCount);
	}, []);

	return (
		<div className={styles.home}>
			<Link href="/">
				<Button className={styles.button}>Перейти к форме</Button>
			</Link>
		</div>
	);
}

export const getStaticProps: GetStaticProps<TableProps> = async () => {
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
	return {
		props: {
			employees,
		},
	};
};

export interface TableProps extends Record<string, unknown> {
	employees: IEmployee[];
}

export interface IDocument {
	count: number;
	document: string;
}
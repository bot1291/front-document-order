import Link from 'next/link';
import { Button, Form } from '../components';
import { IEmployee } from '../interfaces/employee';
import styles from '../styles/Home.module.css';

export default function Home() {
	const employees: IEmployee[] = [
		{
			_id: '123',
			name: 'one',
			documents: [
				{ document: 'maslo', _id: '1' },
				{ document: '1', _id: '1' },
			],
		},
		{
			_id: '321',
			name: 'two',
			documents: [
				{ document: '1', _id: '1' },
				{ document: '1', _id: '1' },
			],
		},
		{
			_id: '222',
			name: 'three',
			documents: [
				{ document: '1', _id: '1' },
				{ document: '1', _id: '1' },
			],
		},
	];
	return (
		<div className={styles.home}>
			<Form employees={employees} />
			<Link href="/table">
				<Button className={styles.button}>Перейти к таблице</Button>
			</Link>
		</div>
	);
}

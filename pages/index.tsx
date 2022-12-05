import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Button, Form } from '../components';
import { IEmployee } from '../interfaces/employee';
import styles from '../styles/Home.module.css';

export default function Home({ employees }: HomeProps) {
	return (
		<div className={styles.home}>
			<Form employees={employees} />
			<Link href="/table">
				<Button className={styles.button}>Перейти к таблице</Button>
			</Link>
		</div>
	);
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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

export interface HomeProps extends Record<string, unknown> {
	employees: IEmployee[];
}

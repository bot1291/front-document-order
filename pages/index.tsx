import { Input } from '../components';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.home}>
			<Input placeholder="Наименование документа" />
		</div>
	);
}

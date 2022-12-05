import { FormProps } from './Form.props';
import styles from './Form.module.css';
import { Input } from '../Input/Input';
import { DropMenu } from '../DropMenu/DropMenu';
import { Button } from '../Button/Button';

export const Form = ({ employees, className, ...props }: FormProps): JSX.Element => {
	return (
		<form className={styles.form}>
			<Input placeholder="Наименование документа" />
			<DropMenu
				defaultText="Выберите имя сотрудника"
				employees={employees}
			/>
			<Button>Добавить документ</Button>
		</form>
	);
};

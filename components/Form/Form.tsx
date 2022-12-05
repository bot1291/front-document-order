import { FormProps } from './Form.props';
import styles from './Form.module.css';
import { Input } from '../Input/Input';
import { DropMenu } from '../DropMenu/DropMenu';
import { Button } from '../Button/Button';
import { useForm } from 'react-hook-form';
import { IForm } from './Form.interface';
import { useState } from 'react';

export const Form = ({
	employees,
	className,
	...props
}: FormProps): JSX.Element => {
	const { register, handleSubmit } = useForm<IForm>();
	const [isFailed, setIsFailed] = useState<string>('');
	const [isSuccess, setIiSuccess] = useState<boolean>(false);

	const onSubmit = (formData: IForm) => {
		const currentEmployee = employees.find((e) => e.name === formData.name);
		const checkForCopy = currentEmployee?.documents.find(
			(d) => d.document === formData.document
		);
		if (checkForCopy) {
			setIsFailed('Запрос на документ уже был послан');
			setIiSuccess(false);
		} else {
			setIsFailed('');
			setIiSuccess(true);
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={`${className} ${styles.form}`}
				{...props}
			>
				<Input
					{...register('document')}
					placeholder="Наименование документа"
				/>
				<DropMenu
					{...register('name')}
					defaultText="Выберите имя сотрудника"
					employees={employees}
				/>
				<Button>Добавить документ</Button>
			</form>
			{isFailed && <div className={styles.failed}>{isFailed}</div>}
			{isSuccess && <div className={styles.success}>Запрос успешно отправлен</div>}
		</>
	);
};

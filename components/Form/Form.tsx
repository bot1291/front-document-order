import { FormProps } from './Form.props';
import styles from './Form.module.css';
import { Input } from '../Input/Input';
import { DropMenu } from '../DropMenu/DropMenu';
import { Button } from '../Button/Button';
import { useForm } from 'react-hook-form';
import { IForm } from './Form.interface';
import { useState } from 'react';
import { IEmployee } from '../../interfaces/employee';

export const Form = ({
	employees,
	className,
	...props
}: FormProps): JSX.Element => {
	const { register, handleSubmit, reset } = useForm<IForm>();
	const [isFailed, setIsFailed] = useState<string>('');
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	const onSubmit = async (formData: IForm) => {
		try {
			const currentEmployee = employees.find(
				(e) => e.name === formData.name
			);

			const employee: IEmployee | string = await fetch(
				'http://localhost:5000/api/employees',
				{
					method: 'PUT',
					body: JSON.stringify({
						...formData,
						_id: currentEmployee?._id,
					}),
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					},
				}
			).then((response) => response.json());
			if (typeof employee === 'string') {
				setIsFailed(employee);
				setIsSuccess(false);
				reset();
				return;
			}
			setIsFailed('');
			setIsSuccess(true);
			console.log(employee);
		} catch (error) {
			if (error instanceof Error) {
				setIsFailed('Произошла ошибка, перезагрузите страницу');
				console.log(error.message);
			}
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
					defaultText="ФИО конструктора"
					employees={employees}
				/>
				<Button>Добавить документ</Button>
			</form>
			{isFailed && <div className={styles.failed}>{isFailed}</div>}
			{isSuccess && (
				<div className={styles.success}>Запрос успешно отправлен</div>
			)}
		</>
	);
};

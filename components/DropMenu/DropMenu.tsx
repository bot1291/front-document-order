import { DropMenuProps } from './DropMenu.props';
import styles from './DropMenu.module.css';

export const DropMenu = ({
	employees,
	defaultText = 'Выберите',
	className,
	...props
}: DropMenuProps): JSX.Element => {
	return (
		<select
			defaultValue="-1"
			className={`${className} ${styles.select}`}
			{...props}
		>
			<option value="-1" disabled>
				{defaultText}
			</option>
			{employees.map((e) => (
				<option value={e.name} key={e._id}>
					{e.name}
				</option>
			))}
		</select>
	);
};

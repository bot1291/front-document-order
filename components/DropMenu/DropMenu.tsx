import { DropMenuProps } from './DropMenu.props';
import styles from './DropMenu.module.css';
import { ForwardedRef, forwardRef } from 'react';

export const DropMenu = forwardRef(
	(
		{
			employees,
			defaultText = 'Выберите',
			className,
			...props
		}: DropMenuProps,
		ref: ForwardedRef<HTMLSelectElement>
	): JSX.Element => {
		return (
			<select
				ref={ref}
				defaultValue="-1"
				className={`${className} ${styles.select}`}
				{...props}
			>
				<option value="-1" disabled>
					{defaultText}
				</option>
				{employees && employees.map((e) => (
					<option value={e.name} key={e._id}>
						{e.name}
					</option>
				))}
			</select>
		);
	}
);

DropMenu.displayName = 'DropMenu';

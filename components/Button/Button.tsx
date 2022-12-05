import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

export const Button = ({
	className,
	children,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button className={`${className} ${styles.button}`} {...props}>
			{children}
		</button>
	);
};

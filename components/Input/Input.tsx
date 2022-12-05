import { InputProps } from './Input.props';
import styles from './Input.module.css';
import { ForwardedRef, forwardRef } from 'react';

export const Input = forwardRef(
	(
		{ className, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
		return (
			<input
				ref={ref}
				className={`${className} ${styles.input}`}
				type="text"
				{...props}
			/>
		);
	}
);

Input.displayName = 'Input';

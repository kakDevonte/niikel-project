import React from 'react';
import styles from './Input.module.scss';

type Props = {
  error?: boolean;
  text?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div className={styles.root}>
      <input
        className={`${styles.input} ${props.error && styles.invalid}`}
        ref={ref}
        {...props}
      />
      {props.error && (
        <label className={styles.errorMessage}>{props.text}</label>
      )}
    </div>
  );
});

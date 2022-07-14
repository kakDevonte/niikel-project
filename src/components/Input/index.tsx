import React from 'react';
import styles from './Input.module.scss';

type Props = {
  error?: boolean;
  text?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ error, text, ...props }, ref) => {
    return (
      <div className={styles.root}>
        <input
          className={`${styles.input} ${error && styles.invalid}`}
          ref={ref}
          {...props}
        />
        {error && <label className={styles.errorMessage}>{text}</label>}
      </div>
    );
  }
);

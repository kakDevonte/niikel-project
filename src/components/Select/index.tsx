import React from 'react';
import styles from './Select.module.scss';

type Props = {
  error?: boolean;
  text?: string;
} & React.ComponentPropsWithoutRef<'select'>;

export const Select = React.forwardRef<HTMLSelectElement, Props>(
  ({ error, text, ...props }, ref) => {
    return (
      <div className={styles.root}>
        <select
          className={`${styles.select} ${error && styles.invalid}`}
          ref={ref}
          {...props}
        />
        {error && <label className={styles.errorMessage}>{text}</label>}
      </div>
    );
  }
);

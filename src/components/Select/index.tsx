import React from 'react';
import styles from './Select.module.scss';

type Props = {
  error?: boolean;
  text?: string;
} & React.ComponentPropsWithoutRef<'select'>;

export const Select = React.forwardRef<HTMLSelectElement, Props>(
  (props, ref) => {
    return (
      <div className={styles.root}>
        <select
          className={`${styles.select} ${props.error && styles.invalid}`}
          ref={ref}
          {...props}
        />
        {props.error && (
          <label className={styles.errorMessage}>{props.text}</label>
        )}
      </div>
    );
  }
);

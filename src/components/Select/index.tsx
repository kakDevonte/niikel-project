import React from 'react';
import styles from './Select.module.scss';

type Props = {
  error?: boolean;
  text?: string;
} & React.ComponentPropsWithoutRef<'select'>;

export const Select = React.forwardRef<HTMLSelectElement, Props>(
  (props, ref) => {
    return (
      <>
        <select className={styles.root} ref={ref} {...props} />
        {!props.error && (
          <label className={styles.errorMessage}>{props.text}</label>
        )}
      </>
    );
  }
);

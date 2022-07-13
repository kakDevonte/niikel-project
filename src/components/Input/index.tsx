import React from 'react';
import styles from './Input.module.scss';

type Props = {
  error?: boolean;
  text?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <>
      <input className={styles.root} ref={ref} {...props} />
      {!props.error && (
        <label className={styles.errorMessage}>{props.text}</label>
      )}
    </>
  );
});

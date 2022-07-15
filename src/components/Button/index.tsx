import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  variant: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonType = {
  [key: string]: string;
};

const ButtonStyles: ButtonType = {
  danger: `${styles.button} ${styles.buttonDanger}`,
  primary: `${styles.button} ${styles.buttonPrimary}`,
  outlinePrimary: `${styles.buttonIcon} ${styles.buttonIconEdit}`,
  outlineDanger: `${styles.buttonIcon} ${styles.buttonIconDelete}`,
};

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <button className={`${ButtonStyles[props.variant]}`} {...props}>
        {props.children}
      </button>
    </>
  );
};

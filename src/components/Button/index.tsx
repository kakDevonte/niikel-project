import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  variant: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonType = {
  [key: string]: string;
};

const ButtonStyles: ButtonType = {
  danger: styles.buttonDanger,
  primary: styles.buttonPrimary,
};

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <button
        className={`${styles.button} ${ButtonStyles[props.variant]}`}
        {...props}
      >
        {props.children}
      </button>
    </>
  );
};

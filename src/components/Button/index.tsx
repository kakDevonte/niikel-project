import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  title: string;
  type: string;
  onClick?: () => void;
};

type ButtonType = {
  [key: string]: string;
};

const ButtonStyles: ButtonType = {
  danger: styles.buttonDanger,
  primary: styles.buttonPrimary,
};

export const Button: React.FC<ButtonProps> = ({ title, type, onClick }) => {
  return (
    <>
      <button
        className={`${styles.button} ${ButtonStyles[type]}`}
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
};

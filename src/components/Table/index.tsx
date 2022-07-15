import React from 'react';
import styles from './Table.module.scss';

export const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = (
  props
) => {
  return (
    <>
      <table className={styles.root} {...props}>
        {props.children}
      </table>
    </>
  );
};

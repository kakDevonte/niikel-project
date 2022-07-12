import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo.png';
import { UserPopup } from '../UserPopup';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerImage}>
        <img src={logo} alt="NIIKEL logo" />
      </div>
      <div className={styles.headerMenu}>
        <ul>
          <li>Чеклисты</li>
          <li>Госпитализация</li>
        </ul>
      </div>
      <div className={styles.headerInfo}>
        <UserPopup />
      </div>
    </div>
  );
};

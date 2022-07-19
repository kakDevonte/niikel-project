import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo.png';
import { UserPopup } from '../UserPopup';
import { useAppSelector } from '../../redux/store';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const { role } = useAppSelector((state) => state.auth.data);

  return (
    <div className={styles.container}>
      <div className={styles.gridItemIcon}>
        <img src={logo} alt="NIIKEL logo" />
      </div>
      <div className={styles.gridItemUl}>
        {role === 'admin' && (
          <ul>
            <li>
              <Link to={'/admin'}>Чеклисты</Link>
            </li>
            <li>
              <Link to={'users'}>Пользователи</Link>
            </li>
          </ul>
        )}
        {(role === 'user' || role === 'user2') && (
          <ul>
            <li>Чеклисты</li>
            <li>Госпитализация</li>
          </ul>
        )}
      </div>
      <div className={styles.gridItemUser}>
        <UserPopup />
      </div>
    </div>
  );
};

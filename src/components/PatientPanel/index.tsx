import React from 'react';
import styles from './PatientPanel.module.scss';
import { Button } from '../Button';
import arrowLeft from '../../assets/img/arrow-bar-left.svg';
import arrowRight from '../../assets/img/arrow-bar-right.svg';

export const PatientPanel: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.date}>
          <span>Дата: </span>
          <button className={`${styles.button} ${styles.buttonLeft}`}>
            <img src={arrowLeft} />
          </button>
          <input type="date" />
          <button className={`${styles.button} ${styles.buttonRight}`}>
            <img src={arrowRight} />
          </button>
        </div>
        <div className={styles.depart}>
          <span>Отделение: </span>
          <select name="department">
            <option defaultValue=""></option>
            <option value="Гинекологическое отделение">
              Гинекологическое отделение
            </option>
            <option value="Хирургическое отделение">
              Хирургическое отделение
            </option>
            <option value="Ревматологическое отделение">
              Ревматологическое отделение
            </option>
            <option value="Эндокринологическое отделение">
              Эндокринологическое отделение
            </option>
          </select>
        </div>
        <div className={styles.search}>
          <input placeholder="Введите ФИО пациента" />
          <Button title={'Найти пациента'} type={'primary'} />
        </div>
      </div>
      <div>
        <Button
          title={'Добавление пациента'}
          type={'primary'}
          onClick={handleVisible}
        />
      </div>
      {isVisible && (
        <form className={styles.form}>
          <div className={styles.gridItem}>
            <label>ФИО пациента</label>
            <input type="text" />
          </div>
          <div className={styles.gridItem}>
            <label>Контингент</label>
            <select name="department"></select>
          </div>
          <div className={styles.gridItem}>
            <label>Профиль</label>
            <input type="text" />
          </div>
          <div className={styles.gridItem}>
            <label>Комментарий</label>
            <input type="text" />
          </div>
          <div className={styles.gridItem}>
            <label>Отделение</label>
            <select name="department"></select>
          </div>
          <div className={styles.gridItem}>
            <label>Дата</label>
            <input type="date" />
            <button>Добавмить</button>

            {/*<Button title={'Добавить'} type={'primary'} />*/}
          </div>
        </form>
      )}
    </div>
  );
};

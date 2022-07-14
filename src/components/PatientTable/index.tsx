import React from 'react';
import styles from './PatientTable.module.scss';
import editIcon from '../../assets/img/edit.svg';
import trashIcon from '../../assets/img/trash.svg';

const patients = [
  {
    id: 1,
    name: 'Хатюшин Александр Сергеевич',
  },
  {
    id: 2,
    name: 'Хатюшин Александр Сергеевич',
  },
  {
    id: 3,
    name: 'Хатюшин Александр Сергеевич',
  },
  {
    id: 4,
    name: 'Хатюшин Александр Сергеевич',
  },
  {
    id: 5,
    name: 'Хатюшин Александр Сергеевич',
  },
  {
    id: 6,
    name: 'Хатюшин Александр Сергеевич',
  },
  {
    id: 7,
    name: 'Хатюшин Александр Сергеевич',
  },
  {
    id: 8,
    name: 'Хатюшин Александр Сергеевич',
  },
  {
    id: 9,
    name: 'Хатюшин Александр Сергеевич',
  },
  {
    id: 10,
    name: 'Хатюшин Александр Сергеевич',
  },
  {
    id: 11,
    name: 'Хатюшин Александр Сергеевич',
  },
  {
    id: 12,
    name: 'Хатюшин Александр Сергеевич',
  },
];

export const PatientTable: React.FC = () => {
  return (
    <div className={styles.root}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>№</th>
            <th>ФИО пациента</th>
            <th>Контингент</th>
            <th>Профиль</th>
            <th>Заявитель</th>
            <th>Допуск</th>
            <th>Комментарии</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>Контингент</td>
              <td>Профиль</td>
              <td>Заявитель</td>
              <td>Допуск</td>
              <td>Комментарии</td>
              <td>
                <div className={styles.buttons}>
                  <button className={`${styles.button} ${styles.buttonEdit}`}>
                    <img src={editIcon} alt="Edit Icon" />
                  </button>
                  <button className={`${styles.button} ${styles.buttonDelete}`}>
                    <img src={trashIcon} alt="Trash Icon" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

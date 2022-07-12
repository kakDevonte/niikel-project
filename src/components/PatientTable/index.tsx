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
      <table>
        <thead>
          <tr>
            <th style={{ width: '5%' }}>№</th>
            <th style={{ width: '30%' }}>ФИО пациента</th>
            <th style={{ width: '15%' }}>Контингент</th>
            <th style={{ width: '20%' }}>Профиль</th>
            <th style={{ width: '20%' }}>Заявитель</th>
            <th style={{ width: '5%' }}>Допуск</th>
            <th style={{ width: '30%' }}>Комментарии</th>
            <th style={{ width: '5%' }}></th>
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

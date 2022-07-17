import React from 'react';
import styles from './PatientTable.module.scss';
import editIcon from '../../assets/img/edit.svg';
import trashIcon from '../../assets/img/trash.svg';
import { Table } from '../Table';
import { Button } from '../Button';
import { Input } from '../Input';
import { TableRow } from '../TableRow';

const patients = [
  {
    id: 1,
    name: 'Хатюшин Александр Сергеевич',
    contingent: '51',
    profile: 'Хирургия',
    declarer: 'Вася Пупкин',
    isAdmit: 'false',
    comment: 'Коммент',
  },
  {
    id: 2,
    name: 'Хатюшин Александр Сергеевич',
    contingent: '51',
    profile: 'Хирургия',
    declarer: 'Вася Пупкин',
    isAdmit: 'false',
    comment: 'Коммент',
  },
  {
    id: 3,
    name: 'Хатюшин Александр Сергеевич',
    contingent: '51',
    profile: 'Хирургия',
    declarer: 'Вася Пупкин',
    isAdmit: 'false',
    comment: 'Коммент',
  },
  {
    id: 4,
    name: 'Хатюшин Александр Сергеевич',
    contingent: '51',
    profile: 'Хирургия',
    declarer: 'Вася Пупкин',
    isAdmit: 'false',
    comment: 'Коммент',
  },
  {
    id: 5,
    name: 'Хатюшин Александр Сергеевич',
    contingent: '51',
    profile: 'Хирургия',
    declarer: 'Вася Пупкин',
    isAdmit: 'false',
    comment: 'Коммент',
  },
  {
    id: 6,
    name: 'Хатюшин Александр Сергеевич',
    contingent: '51',
    profile: 'Хирургия',
    declarer: 'Вася Пупкин',
    isAdmit: 'false',
    comment: 'Коммент',
  },
  {
    id: 7,
    name: 'Хатюшин Александр Сергеевич',
    contingent: '51',
    profile: 'Хирургия',
    declarer: 'Вася Пупкин',
    isAdmit: 'false',
    comment: 'Коммент',
  },
  {
    id: 8,
    name: 'Хатюшин Александр Сергеевич',
    contingent: '51',
    profile: 'Хирургия',
    declarer: 'Вася Пупкин',
    isAdmit: 'false',
    comment: 'Коммент',
  },
];

export const PatientTable: React.FC = () => {
  return (
    <div className={styles.root}>
      <Table>
        <thead>
          <tr>
            <th style={{ width: 5 + '%' }}>№</th>
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
            <TableRow key={patient.id} {...patient} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

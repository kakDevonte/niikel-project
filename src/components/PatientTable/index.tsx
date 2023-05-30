import React from 'react';
import styles from './PatientTable.module.scss';
import { Table } from '../Table';
import { TableRow } from '../TableRow';
import { useAppSelector } from '../../redux/store';

export const PatientTable: React.FC = () => {
  const { hospitalDays } = useAppSelector((state) => state.hospital);

  console.log(hospitalDays);
  return (
    <div className={styles.root}>
      {hospitalDays &&
        hospitalDays.map((day, index) => (
          <div key={index}>
            <h3>
              {new Date(day.date).toLocaleDateString('ru-RU')} {day.department}
            </h3>
            <Table>
              <thead>
                <tr>
                  <th style={{ width: 5 + '%' }}>№</th>
                  <th style={{ width: 30 + '%' }}>ФИО пациента</th>
                  <th style={{ width: 15 + '%' }}>Контингент</th>
                  <th style={{ width: 15 + '%' }}>Профиль</th>
                  <th style={{ width: 15 + '%' }}>МКБ</th>
                  <th style={{ width: 25 + '%' }}>Заявитель</th>
                  <th style={{ width: 8 + '%' }}>Допуск</th>
                  <th style={{ width: 20 + '%' }}>Комментарии</th>
                  <th style={{ width: 15 + '%' }} className={styles.dNone}></th>
                </tr>
              </thead>
              <tbody>
                {day.patients.map((patient, index) => (
                  <TableRow
                    key={patient.id}
                    {...patient}
                    index={index}
                    department={day.department}
                    date={day.date}
                  />
                ))}
              </tbody>
            </Table>
          </div>
        ))}
    </div>
  );
};

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

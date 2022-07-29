import React, { useEffect } from 'react';
import { Table } from '../../components';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getLogs } from '../../redux/log/asyncActions';

export const LogPage: React.FC = () => {
  const { logs } = useAppSelector((state) => state.logs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLogs());
  }, []);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th style={{ width: 10 + '%' }}>Дата</th>
            <th>Запись</th>
          </tr>
        </thead>
        <tbody>
          {logs &&
            logs.map((log) => (
              <tr>
                <td>{log.date}</td>
                <td>{log.message}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

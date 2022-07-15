import React from 'react';
import { Table } from '../../components/Table';
import { Button } from '../../components/Button';
import editIcon from '../../assets/img/edit.svg';
import trashIcon from '../../assets/img/trash.svg';

const users = [
  {
    firsName: 'Александр',
    lastName: 'Хатюшин',
    email: 'admin@mail.ru',
    role: 'admin',
    department: 'Хирургия',
  },
  {
    firsName: 'Александр',
    lastName: 'Хатюшин',
    email: 'admin@mail.ru',
    role: 'admin',
    department: 'Хирургия',
  },
  {
    firsName: 'Александр',
    lastName: 'Хатюшин',
    email: 'admin@mail.ru',
    role: 'admin',
    department: 'Хирургия',
  },
  {
    firsName: 'Александр',
    lastName: 'Хатюшин',
    email: 'admin@mail.ru',
    role: 'admin',
    department: 'Хирургия',
  },
  {
    firsName: 'Александр',
    lastName: 'Хатюшин',
    email: 'admin@mail.ru',
    role: 'admin',
    department: 'Хирургия',
  },
];

export const UsersListPage: React.FC = () => {
  return (
    <div>
      <Button variant={'primary'}>Добавить пользователя</Button>
      <Table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Почта</th>
            <th>Роль</th>
            <th>Отделение</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                {user.firsName} {user.lastName}
              </td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.department}</td>
              <td>
                <Button variant={'outlinePrimary'}>
                  <img src={editIcon} />
                </Button>
                <Button variant={'outlineDanger'}>
                  <img src={trashIcon} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

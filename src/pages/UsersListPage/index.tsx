import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Table } from '../../components/Table';
import { Button } from '../../components/Button';
import editIcon from '../../assets/img/edit.svg';
import trashIcon from '../../assets/img/trash.svg';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { deleteUser, getUsers } from '../../redux/users/asyncActions';
import { toggleEditMode } from '../../redux/users/slice';

export const UsersListPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);

  React.useEffect(() => {
    dispatch(getUsers());
  }, []);

  const onClickEditUser = (id: string) => {
    dispatch(toggleEditMode(true));
    navigate(`editor/${id}`);
  };

  return (
    <div>
      <Button variant={'primary'}>
        <Link to={'/admin/users/editor'}>Добавить пользователя</Link>
      </Button>
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
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.department}</td>
              <td>
                <Button
                  variant={'outlinePrimary'}
                  onClick={() => onClickEditUser(user._id)}
                >
                  <img src={editIcon} />
                </Button>
                <Button
                  variant={'outlineDanger'}
                  onClick={() => dispatch(deleteUser(user._id))}
                >
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

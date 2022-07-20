import React from 'react';

import styles from './AddEditUserPage.module.scss';
import { Input, Select, Button } from '../../components/';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { UserType } from '../../redux/users/types';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  createUser,
  getUserById,
  updateUser,
} from '../../redux/users/asyncActions';
import { toggleEditMode } from '../../redux/users/slice';
import { DEPARTMENTS } from '../../utils/departments';

export const AddEditUserPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currUser, isEditMode } = useAppSelector((state) => state.users);
  const match = useMatch('admin/users/editor/:id/');
  const navigate = useNavigate();

  React.useEffect(() => {
    if (match && match.params.id) dispatch(getUserById(match.params.id));
  }, []);

  const schema = yup.object().shape({
    firstName: yup.string().required('Требуется ввести имя'),
    lastName: yup.string().required('Требуется ввести фамилию'),
    email: yup
      .string()
      .required('Требуется выбрать контингент')
      .email('Некорректная почта'),
    role: yup.string().required('Требуется выбрать роль'),
    department: yup.string().required('Требуется выбрать отделение'),
    password: yup
      .string()
      .concat(
        isEditMode
          ? yup.string()
          : yup.string().required('Требуется ввести пароль')
      ),
    confirmPassword: yup
      .string()
      .when('password', (password, schema) => {
        if (password)
          return schema.required('Требуется ввести пароль для подтверждения');
      })
      .oneOf([yup.ref('password')], 'Пароли должны совпадать'),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserType>({ mode: 'onBlur', resolver: yupResolver(schema) });

  React.useEffect(() => {
    if (isEditMode) {
      setValue('_id', currUser._id);
      setValue('firstName', currUser.firstName);
      setValue('lastName', currUser.lastName);
      setValue('email', currUser.email);
      setValue('role', currUser.role);
      setValue('department', currUser.department);
    }
  }, [currUser]);

  const onSubmit: SubmitHandler<UserType> = (data) => {
    isEditMode ? dispatch(updateUser(data)) : dispatch(createUser(data));
    navigate(-1);
  };

  return (
    <div className={styles.root}>
      <h1>
        {isEditMode ? 'Редактирование пользователя' : 'Добавление пользователя'}
      </h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={`${styles.gridItem} ${styles.firstName}`}>
          <label>Имя</label>
          <Input
            {...register('firstName')}
            error={!!errors.firstName}
            text={errors?.firstName?.message}
          />
        </div>
        <div className={`${styles.gridItem} ${styles.lastName}`}>
          <label>Фамилия</label>
          <Input
            {...register('lastName')}
            error={!!errors.lastName}
            text={errors?.lastName?.message}
          />
        </div>
        <div className={`${styles.gridItem} ${styles.email}`}>
          <label>Почта</label>
          <Input
            {...register('email')}
            error={!!errors.email}
            text={errors?.email?.message}
          />
        </div>
        <div className={`${styles.gridItem} ${styles.role}`}>
          <label>Роль</label>
          <Select
            {...register('role')}
            error={!!errors.role}
            text={errors?.role?.message}
          >
            <option disabled value="" />
            <option value="admin">Админ</option>
            <option value="head">Руководитель</option>
            <option value="userChecklist">Пользователь чеклистов</option>
            <option value="userHospital">Пользователь госпитализации</option>
            <option value="guest">Гость</option>
          </Select>
        </div>
        <div className={`${styles.gridItem} ${styles.department}`}>
          <label>Отделение</label>
          <Select
            {...register('department')}
            error={!!errors.department}
            text={errors?.department?.message}
          >
            <option disabled value="" />
            {Object.entries(DEPARTMENTS).map(([key, val]) => (
              <option key={key} value={val}>
                {val}
              </option>
            ))}
          </Select>
        </div>
        {isEditMode && (
          <div className={`${styles.gridItem} ${styles.passInfo}`}>
            <h3>Изменить пароль</h3>
            <p>Оставьте поле пустым, чтобы сохранить тот же пароль</p>
          </div>
        )}
        <div className={`${styles.gridItem} ${styles.pass}`}>
          <label>Пароль</label>
          <Input
            {...register('password')}
            error={!!errors.password}
            text={errors?.password?.message}
          />
        </div>
        <div className={`${styles.gridItem} ${styles.confirmPass}`}>
          <label>Подтвердите пароль</label>
          <Input
            {...register('confirmPassword')}
            error={!!errors.confirmPassword}
            text={errors?.confirmPassword?.message}
          />
        </div>
        <div className={` ${styles.button}`}>
          <Link
            to={'/admin/users'}
            onClick={() => dispatch(toggleEditMode(false))}
          >
            Назад
          </Link>
          <Button variant={'primary'} type="submit">
            Добавить
          </Button>
        </div>
      </form>
    </div>
  );
};

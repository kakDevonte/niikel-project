import React from 'react';

import styles from './AddEditUserPage.module.scss';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  department: string;
  password: string;
  confirmPassword?: string;
};

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
    //.concat(isEditMode ? null : yup.string().required('Требуется ввести пароль'))
    .min(6, 'Пароль должен состоять не менее чем из 6 символов'),
  confirmPassword: yup
    .string()
    .when('password', (password, schema) => {
      if (password)
        return schema.required('Требуется ввести пароль для подтверждения');
    })
    .oneOf([yup.ref('password')], 'Пароли должны совпадать'),
});

export const AddEditUserPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({ mode: 'onBlur', resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<UserType> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.root}>
      <h1>Добавление пользователя</h1>
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
            <option value="admin">Админ</option>
          </Select>
        </div>
        <div className={`${styles.gridItem} ${styles.passInfo}`}>
          <h3>Изменить пароль</h3>
          <p>Оставьте поле пустым, чтобы сохранить тот же пароль</p>
        </div>
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
          <Link to={'/admin/users'}>Назад</Link>
          <Button variant={'primary'} type="submit">
            Добавить
          </Button>
        </div>
      </form>
    </div>
  );
};

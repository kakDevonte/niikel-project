import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';

import styles from './AuthPage.module.scss';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { SubmitHandler, useForm } from 'react-hook-form';

type AuthType = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Требуется ввести почту')
    .email('Неккоректно введена почта'),
  password: yup.string().required('Требуется ввести пароль'),
});

export const AuthPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthType>({ mode: 'onBlur', resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<AuthType> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.root}>
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.item}>
          <label>Почта</label>
          <Input
            {...register('email')}
            error={!!errors.email}
            text={errors?.email?.message}
          />
        </div>
        <div className={styles.item}>
          <label>Пароль</label>
          <Input
            type="password"
            {...register('password')}
            error={!!errors.password}
            text={errors?.password?.message}
          />
        </div>
        <div className={styles.item}>
          <Button variant={'primary'}>Вход</Button>
        </div>
      </form>
    </div>
  );
};

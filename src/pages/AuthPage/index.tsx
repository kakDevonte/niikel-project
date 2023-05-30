import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';

import styles from './AuthPage.module.scss';
import { Input, Button } from '../../components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { login } from '../../redux/auth/asyncActions';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuth, role } = useAppSelector((state) => state.auth.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthType>({ mode: 'onBlur', resolver: yupResolver(schema) });

  React.useEffect(() => {
    console.log(isAuth, 'мы ререндеримся');
    if (isAuth) {
      switch (role) {
        case 'admin':
          navigate('/admin');
          break;
        case 'head':
          navigate('/head');
          break;
        case 'userHospital':
          navigate('/user');
          break;
        case 'userChecklist':
          navigate('/user');
          break;
        case 'guest':
          navigate('/user');
          break;
      }
    }
  }, [isAuth]);

  const onSubmit: SubmitHandler<AuthType> = (data) => {
    const { email, password } = data;
    dispatch(login({ email, password }));
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
            {...register('password')}
            error={!!errors.password}
            text={errors?.password?.message}
          />
        </div>
        <div className={styles.item}>
          <Button variant={'primary'} type="submit">
            Вход
          </Button>
        </div>
      </form>
    </div>
  );
};

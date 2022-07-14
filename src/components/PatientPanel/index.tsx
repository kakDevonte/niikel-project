import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import styles from './PatientPanel.module.scss';
import { Button } from '../Button';
import arrowLeft from '../../assets/img/arrow-bar-left.svg';
import arrowRight from '../../assets/img/arrow-bar-right.svg';
import { Input } from '../Input';
import { Select } from '../Select';
import { yupResolver } from '@hookform/resolvers/yup';

type PatientType = {
  name: string;
  contingent: string;
  department: string;
  profile: string;
  comment: string;
  date: string;
};

const schema = yup.object().shape({
  name: yup.string().required('Требуется ввести ФИО пациента'),
  contingent: yup.string().required('Требуется выбрать контингент'),
  profile: yup.string().required('Требуется ввести профиль'),
  department: yup.string().required('Требуется выбрать отделение'),
  date: yup.string().required('Требуется выбрать дату'),
});

export const PatientPanel: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PatientType>({ mode: 'onBlur', resolver: yupResolver(schema) });

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  const onSubmit: SubmitHandler<PatientType> = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.date}>
          <span>Дата: </span>
          <div className={styles.dateGroup}>
            <button className={`${styles.buttonIcon} ${styles.buttonIconLeft}`}>
              <img src={arrowLeft} alt="arrow left" />
            </button>
            <Input type="date" />
            <Input type="date" />
            <button
              className={`${styles.buttonIcon} ${styles.buttonIconRight}`}
            >
              <img src={arrowRight} alt="arrow right" />
            </button>
          </div>
        </div>
        <div className={styles.depart}>
          <span>Отделение: </span>
          <Select name="department">
            <option defaultValue=""></option>
            <option value="Гинекологическое отделение">
              Гинекологическое отделение
            </option>
            <option value="Хирургическое отделение">
              Хирургическое отделение
            </option>
            <option value="Ревматологическое отделение">
              Ревматологическое отделение
            </option>
            <option value="Эндокринологическое отделение">
              Эндокринологическое отделение
            </option>
          </Select>
        </div>
        <div className={styles.search}>
          <Button variant={'primary'}>Поиск</Button>
        </div>
      </div>
      <div>
        <Button variant={'primary'} onClick={handleVisible}>
          Добавление пациента
        </Button>
      </div>
      {isVisible && (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.gridItem}>
            <label>ФИО пациента</label>
            <Input
              {...register('name')}
              error={!!errors.name}
              text={errors?.name?.message}
            />
          </div>
          <div className={styles.gridItem}>
            <label>Контингент</label>
            <Select
              {...register('contingent')}
              error={!!errors.contingent}
              text={errors?.contingent?.message}
            >
              <option defaultValue=""></option>
              <option value="Гинекологическое отделение">
                Гинекологическое отделение
              </option>
            </Select>
          </div>
          <div className={styles.gridItem}>
            <label>Профиль</label>
            <Input
              {...register('profile')}
              error={!!errors.profile}
              text={errors?.profile?.message}
            />
          </div>
          <div className={styles.gridItem}>
            <label className={styles.textFieldLabel}>Комментарий</label>
            <Input {...register('comment')} />
          </div>
          <div className={styles.gridItem}>
            <label>Отделение</label>
            <Select
              {...register('department')}
              error={!!errors.department}
              text={errors?.department?.message}
            >
              <option defaultValue=""></option>
              <option value="Гинекологическое отделение">
                Гинекологическое отделение
              </option>
            </Select>
          </div>
          <div className={styles.gridItem}>
            <label>Дата</label>
            <Input
              {...register('date')}
              type="date"
              error={!!errors.date}
              text={errors?.date?.message}
            />
          </div>
          <div className={styles.gridItem}>
            <Button variant={'primary'}>Добавить</Button>
          </div>
        </form>
      )}
    </div>
  );
};

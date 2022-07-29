import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './PatientPanel.module.scss';
import { Button, Input, Select } from '../index';
import arrowLeft from '../../assets/img/arrow-bar-left.svg';
import arrowRight from '../../assets/img/arrow-bar-right.svg';
import { PatientType, SearchValueType } from '../../redux/hospital/types';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  addPatient,
  getAllDepartments,
  getHospitalDays,
} from '../../redux/hospital/asyncActions';
import { DECLARANT } from '../../utils/declarant';

const schema = yup.object().shape({
  name: yup.string().required('Требуется ввести ФИО пациента'),
  content: yup.string().required('Требуется выбрать контингент'),
  direction: yup.string().required('Требуется ввести профиль'),
  department: yup.string().required('Требуется выбрать отделение'),
  date: yup.string().required('Требуется выбрать дату'),
});

export const PatientPanel: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const { name, role } = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = React.useState<SearchValueType>({
    firstDate: new Date().toLocaleDateString('en-CA'),
    secondDate: '',
    department: 'Гинекологическое отделение',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PatientType>({ mode: 'onBlur', resolver: yupResolver(schema) });

  const handleSearchValue = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setSearchValue({ ...searchValue, [name]: value });
  };

  const onClickArrowBtn = (side: number) => {
    let result = new Date(searchValue.firstDate);
    result.setDate(result.getDate() + side);
    setSearchValue({
      ...searchValue,
      firstDate: result.toLocaleDateString('en-CA'),
    });
    dispatch(
      getHospitalDays({
        firstDate: result.toLocaleDateString('en-CA'),
        secondDate: searchValue.secondDate,
        department: searchValue.department,
      })
    );
  };

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  const onClickSearch = () => {
    if (searchValue.department === 'all')
      dispatch(getAllDepartments(searchValue));
    else dispatch(getHospitalDays(searchValue));
  };

  const onClickPrint = () => {
    window.print();
  };

  const randomId = () => Math.random().toString(16).slice(2);

  const onSubmit: SubmitHandler<PatientType> = (data) => {
    data.id = randomId();
    data.declarer = name;
    data.isDelete = false;
    data.isPermit = false;

    dispatch(addPatient(data));
    setIsVisible(false);
  };
  return (
    <div className={`${styles.root} d-none`}>
      <div className={styles.panel}>
        <div className={styles.panelDate}>
          <label>Дата:</label>
          <Button
            variant={'outlinePrimary'}
            onClick={() => onClickArrowBtn(-1)}
          >
            <img src={arrowLeft} alt="arrow left" />
          </Button>
          <Input
            type="date"
            name="firstDate"
            value={searchValue.firstDate}
            onChange={handleSearchValue}
          />
          <Input
            type="date"
            name="secondDate"
            value={searchValue.secondDate}
            onChange={handleSearchValue}
          />
          <Button variant={'outlinePrimary'} onClick={() => onClickArrowBtn(1)}>
            <img src={arrowRight} alt="arrow right" />
          </Button>
        </div>
        <div className={styles.panelDepartment}>
          <label>Отделение: </label>
          <Select
            name="department"
            value={searchValue.department}
            onChange={handleSearchValue}
          >
            <option disabled value="" />
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
            <option value="all">Все отделения</option>
          </Select>
        </div>
        <div className={styles.panelSearch}>
          <Button variant={'primary'} onClick={onClickSearch}>
            Поиск
          </Button>
        </div>
      </div>
      <div>
        <Button
          variant={'primary'}
          onClick={handleVisible}
          disabled={role === 'guest'}
        >
          Добавление пациента
        </Button>
        <Button variant={'primary'} onClick={onClickPrint}>
          Распечатать
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
              {...register('content')}
              error={!!errors.content}
              text={errors?.content?.message}
            >
              <option disabled value="" />
              {Object.entries(DECLARANT).map(([key, val]) => (
                <option key={key} value={val}>
                  {val}
                </option>
              ))}
            </Select>
          </div>
          <div className={styles.gridItem}>
            <label>Профиль</label>
            <Input
              {...register('direction')}
              error={!!errors.direction}
              text={errors?.direction?.message}
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
              <option disabled value="" />
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

import { createAsyncThunk } from '@reduxjs/toolkit';
import { hospitalAPI } from '../../api/api';
import { HospitalDayType, PatientType, SearchValueType } from './types';

export const addPatient = createAsyncThunk<void, PatientType>(
  'hospital/addPatient',
  async (patient, { dispatch }) => {
    await hospitalAPI.create(patient);
    dispatch(
      getHospitalDays({
        department: patient.department,
        firstDate: patient.date,
        secondDate: '',
      })
    );
  }
);
export const editPatient = createAsyncThunk<
  void,
  PatientType & { department: string; date: string }
>('hospital/addPatient', async (data, { dispatch }) => {
  await hospitalAPI.update({
    ...data,
    date: data.date,
    department: data.department,
  });
  dispatch(
    getHospitalDays({
      department: data.department,
      firstDate: data.date,
      secondDate: '',
    })
  );
});

export const getHospitalDays = createAsyncThunk<
  HospitalDayType[],
  SearchValueType
>('hospital/getHospitalDays', async (params) => {
  const { firstDate, secondDate, department } = params;
  const { data } = await hospitalAPI.get(department, firstDate, secondDate);
  return data;
});

export const getAllDepartments = createAsyncThunk<
  HospitalDayType[],
  SearchValueType
>('hospital/getAllDepart', async (params) => {
  const { firstDate, secondDate } = params;
  const { data } = await hospitalAPI.getAll(firstDate, secondDate);
  return data;
});

export const handleDeleteStatusPatient = createAsyncThunk<
  void,
  { date: string; department: string; id: string; isDelete: boolean }
>('hospital/getHospitalDays', async (params, { dispatch }) => {
  await hospitalAPI.handleDelete(params);
  dispatch(
    getHospitalDays({
      department: params.department,
      firstDate: params.date,
      secondDate: '',
    })
  );
});

export const deletePatient = createAsyncThunk<
  void,
  { date: string; department: string; id: string }
>('hospital/getHospitalDays', async (params, { dispatch }) => {
  const { date, department, id } = params;
  await hospitalAPI.delete(date, department, id);
  dispatch(
    getHospitalDays({
      department: params.department,
      firstDate: params.date,
      secondDate: '',
    })
  );
});

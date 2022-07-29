import { createAsyncThunk } from '@reduxjs/toolkit';
import { hospitalAPI } from '../../api/api';
import { HospitalDayType, SearchValueType } from '../hospital/types';
import { logsType } from './types';

export const addLogMessage = createAsyncThunk<
  void,
  { date: string; message: string }
>('log/addLogMessage', async (params) => {
  const { date, message } = params;
  await hospitalAPI.log(date, message);
});

export const getLogs = createAsyncThunk<logsType[]>(
  'log/getLogs',
  async (params) => {
    const { data } = await hospitalAPI.getLogs();
    return data;
  }
);

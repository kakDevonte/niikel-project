import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '../../api/api';
import { AuthDataType, AuthState, LoginType } from './types';

export const login = createAsyncThunk<string, LoginType>(
  'auth/login',
  async (params, { dispatch }) => {
    const { email, password } = params;
    const { data } = await authAPI.login(email, password);
    await dispatch(getUserData());
    return data;
  }
);

export const getUserData = createAsyncThunk<AuthDataType>(
  'auth/getData',
  async () => {
    const { data } = await authAPI.me();
    return data;
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await authAPI.logout();
});

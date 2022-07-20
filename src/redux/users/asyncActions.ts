import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI, usersAPI } from '../../api/api';
import { UserType } from './types';

export const getUsers = createAsyncThunk<UserType[]>(
  'users/getAll',
  async () => {
    const { data } = await usersAPI.get();
    return data;
  }
);

export const getUserById = createAsyncThunk<UserType, string>(
  'users/getById',
  async (id) => {
    const { data } = await usersAPI.getById(id);
    return data;
  }
);
export const createUser = createAsyncThunk<any, UserType>(
  'users/create',
  async (user, { dispatch }) => {
    await usersAPI.create(user);
    dispatch(getUsers());
  }
);

export const updateUser = createAsyncThunk<any, UserType>(
  'users/update',
  async (user, { dispatch }) => {
    await usersAPI.update(user);
    dispatch(getUsers());
  }
);

export const deleteUser = createAsyncThunk<any, string>(
  'users/delete',
  async (id, { dispatch }) => {
    await usersAPI.delete(id);
    dispatch(getUsers());
  }
);

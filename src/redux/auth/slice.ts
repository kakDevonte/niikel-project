import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, Status } from './types';
import { getUserData, login } from './asyncActions';

const initialState: AuthState = {
  isAuth: false,
  role: '',
  department: '',
  name: '',
  status: Status.WAIT,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<AuthState>) {
      state = action.payload;
    },
  },
  extraReducers: {
    [login.pending.type]: (state) => {
      state.status = Status.LOADING;
    },
    [login.fulfilled.type]: (state) => {
      console.log('я загрузился');
      //state.status = Status.SUCCESS;
    },
    [login.rejected.type]: (state) => {
      state.status = Status.ERROR;
    },

    [getUserData.pending.type]: (state) => {
      console.log('я ГРУЖУСЬ');
    },
    [getUserData.fulfilled.type]: (state, action) => {
      //setUserData(action.payload);
      state = action.payload;
      console.log('я получил данные', action.payload);
      console.log('я получил данные', state);
    },
    [getUserData.rejected.type]: (state) => {
      console.log('я ОШИБСЯ');
    },
    //
    // [getUserData.fulfilled.type]: (state) => {
    //   state = { isAuth: false, role: '', department: '', name: '' };
    // },
  },
});

export const { setUserData } = authSlice.actions;
export default authSlice.reducer;

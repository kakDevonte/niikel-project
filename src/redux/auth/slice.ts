import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, Status } from './types';
import { getUserData, login, logout } from './asyncActions';

const initialState: AuthState = {
  data: {
    isAuth: false,
    role: '',
    department: '',
    name: '',
  },
  status: Status.LOADING,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<AuthState>) {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(getUserData.rejected, (state) => {
      state.status = Status.ERROR;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.status = Status.SUCCESS;
      state.data = {
        isAuth: false,
        role: '',
        department: '',
        name: '',
      };
    });
  },

  //     {
  //   [login.pending.type]: (state) => {
  //     state.status = Status.LOADING;
  //   },
  //   [login.fulfilled.type]: (state) => {
  //     console.log('я загрузился');
  //     //
  //   },
  //   [login.rejected.type]: (state) => {
  //     state.status = Status.ERROR;
  //   },
  //
  //   [getUserData.pending.type]: (state) => {
  //     console.log('я ГРУЖУСЬ');
  //   },
  //   [getUserData.fulfilled.type]: (state, action) => {
  //     state.status = Status.SUCCESS;
  //     state.isAuth = action.payload.isAuth;
  //     state.role = action.payload.role;
  //     state.department = action.payload.department;
  //     state.name = action.payload.name;
  //     // state = { state, ...action.payload };
  //   },
  //   [getUserData.rejected.type]: (state) => {
  //     console.log('я ОШИБСЯ');
  //   },
  //
  //   [logout.fulfilled.type]: (state) => {
  //     state = {
  //       isAuth: false,
  //       role: '',
  //       department: '',
  //       name: '',
  //       status: Status.WAIT,
  //     };
  //   },
  // },
});

export const { setUserData } = authSlice.actions;
export default authSlice.reducer;

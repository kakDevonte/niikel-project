import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersState } from './types';
import { createUser, getUserById, getUsers, updateUser } from './asyncActions';

const initialState: UsersState = {
  users: [],
  currUser: {
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    role: '',
    password: '',
    department: '',
  },
  isEditMode: false,
};
//, action: PayloadAction<boolean>

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    toggleEditMode(state, action: PayloadAction<boolean>) {
      state.isEditMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      //state.status = Status.LOADING;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.currUser = action.payload;
    });
    // builder.addCase(createUser.fulfilled, (state, action) => {});
    // builder.addCase(updateUser.fulfilled, (state, action) => {});
  },
});

export const { toggleEditMode } = usersSlice.actions;
export default usersSlice.reducer;

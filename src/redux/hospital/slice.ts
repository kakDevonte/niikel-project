import { HospitalState } from './types';
import { createSlice } from '@reduxjs/toolkit';
import { getAllDepartments, getHospitalDays } from './asyncActions';

const initialState: HospitalState = {
  hospitalDays: [],
};

const hospitalSlice = createSlice({
  name: 'hospital',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHospitalDays.fulfilled, (state, action) => {
      state.hospitalDays = action.payload;
    });
    builder.addCase(getHospitalDays.pending, (state) => {
      state.hospitalDays = [];
    });
    builder.addCase(getHospitalDays.rejected, (state) => {
      state.hospitalDays = [];
    });
    builder.addCase(getAllDepartments.fulfilled, (state, action) => {
      state.hospitalDays = action.payload;
    });
    builder.addCase(getAllDepartments.pending, (state) => {
      state.hospitalDays = [];
    });
    builder.addCase(getAllDepartments.rejected, (state) => {
      state.hospitalDays = [];
    });
  },
});

// export const { toggleEditMode } = usersSlice.actions;
export default hospitalSlice.reducer;

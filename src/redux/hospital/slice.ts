import { HospitalState } from './types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: HospitalState = {
  patients: [],
};

const hospitalSlice = createSlice({
  name: 'hospital',
  initialState,
  reducers: {},
});

// export const { toggleEditMode } = usersSlice.actions;
export default hospitalSlice.reducer;

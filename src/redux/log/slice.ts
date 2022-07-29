import { logsState } from './types';
import { createSlice } from '@reduxjs/toolkit';
import { getLogs } from './asyncActions';

const initialState: logsState = {
  logs: [],
};

const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLogs.fulfilled, (state, action) => {
      state.logs = action.payload;
    });
    builder.addCase(getLogs.pending, (state) => {
      state.logs = [];
    });
    builder.addCase(getLogs.rejected, (state) => {
      state.logs = [];
    });
  },
});

export default logSlice.reducer;

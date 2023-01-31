import { createSlice } from '@reduxjs/toolkit';

const tableSlice = createSlice({
  name: 'table',
  initialState: {
    table: [],
    isFetching: false,
    error: false,
    success: false,
  },

  reducers: {
    getTableStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getTableSuccess: (state, action) => {
      state.isFetching = false;
      state.table = action.payload;
      state.error = false;
    },
    getTableFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    tableStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.success = false;
    },
    tableSuccess: (state, action) => {
      state.isFetching = false;
      state.table.push(action.payload);
      state.error = false;
      state.success = true;
    },
    tableFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
    },
  },
});

export const {
  getTableStart,
  getTableSuccess,
  getTableFailure,
  tableStart,
  tableSuccess,
  tableFailure,
} = tableSlice.actions;

export default tableSlice.reducer;

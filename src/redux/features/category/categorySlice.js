import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  categories: [],
  status: 'Under Construction',
};

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.status = 'Under Construction';
    },
  },
});

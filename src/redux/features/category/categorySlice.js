import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;

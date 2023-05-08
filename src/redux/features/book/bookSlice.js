import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({
        id: action.id,
        title: action.title,
        author: action.author,
        category: action.category,
      });
    },
    removeBook: (state, action) => {
      state.books = state.books
        .filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;

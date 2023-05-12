import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../../config/api';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const fetchBooks = createAsyncThunk('book/getBooks', async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({
        item_id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      });
    },
    removeBook: (state, action) => {
      state.books = state.books
        .filter((book) => book.item_id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;

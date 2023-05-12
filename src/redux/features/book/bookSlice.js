import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/bJc3DxMoedsueOCCDqQv/books';

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

export const fetchBooks = createAsyncThunk('book/getBooks', async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const postBook = createAsyncThunk('book/postBook', async (payload) => {
  try {
    const response = await axios.post(URL, payload);
    return [response.data, payload];
  } catch (err) {
    return err.message;
  }
});

export const deleteBook = createAsyncThunk('book/deleteBook', async (payload) => {
  try {
    const response = await axios.delete(`${URL}/${payload}`);
    return [response.data, payload];
  } catch (err) {
    return err.message;
  }
});

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = Object.keys(action.payload).map((key) => ({
        item_id: key,
        ...action.payload[key][0],
      }));
    });

    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Adding a book
    builder.addCase(postBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload[1]);
    });

    builder.addCase(postBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Deleting a book
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload[1],
      );
    });

    builder.addCase(deleteBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;

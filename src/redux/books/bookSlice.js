import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GIRQBhlsKPXQAMouEvWh/books';

const addBook
const removeBook
const showBook


const initialState = {
  books: [],
  error: '',
  loading: 'idle',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
  }
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;

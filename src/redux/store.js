import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/bookSlice';
import categoriesReducer from './catagories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;

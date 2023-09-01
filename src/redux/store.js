import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/bookSlice';
import categoriesReducer from './catagories/categoriesSlice';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;

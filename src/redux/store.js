import { combineReducers, conbineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/bookSlice';
import categoriesReducer from './catagories/categoriesSlice';

const rootRuducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: {
    rootRuducer,
  },
});

export default store;

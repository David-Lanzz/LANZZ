import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './features/books/bookSlice';
import categoreReducer from './features/categories/categorySlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoreReducer,
  },
});

export default store;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [{
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
  }],
};
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBooks: (state, action) => {
      const id = action.payload;
      const filtered = state.books.filter((book) => book.item_id !== id);
      return { ...state, books: filtered };
    },
    addBooks: (state, action) => {
      const newBook = action.payload;
      return { ...state, books: [...state.books, { ...newBook, item_id: Math.random() }] };
    },
  },
});

export const { addBooks, removeBooks } = bookSlice.actions;
export default bookSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: 'Under construction',
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
});
export default categorySlice.reducer;

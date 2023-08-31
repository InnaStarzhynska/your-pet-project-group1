import { createSlice } from '@reduxjs/toolkit';
import { getNewsByQuery } from 'redux/operations/fetchNews';

const initialState = {
  news: [],
  isLoading: false,
  page:1,
  totalPages: 1
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = state => {
  state.isLoading = false;
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getNewsByQuery.pending, handlePending)
      .addCase(getNewsByQuery.fulfilled, (state, { payload }) => {
        state.news = payload.news;
        state.isLoading = false;
        state.totalPages = payload.totalPages;
        state.page= payload.page
      })
      .addCase(getNewsByQuery.rejected, handleRejected);
  },
});

export const newsReducer = newsSlice.reducer;
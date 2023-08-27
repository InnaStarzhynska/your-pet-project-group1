import { createSlice } from '@reduxjs/toolkit';
import {
  getNoticesByQuery,
  getNoticeById,
  addNotice,
  deleteNotice,
} from 'redux/operations/fetchNotices';

const initialState = {
  notices: [],
  isLoading: false,
  totalPages: 1,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = state => {
  state.isLoading = false;
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getNoticesByQuery.pending, handlePending)
      .addCase(getNoticesByQuery.fulfilled, (state, { payload }) => {
        state.notices = payload.notices;
        state.isLoading = false;
        state.totalPages = payload.totalPages;
      })
      .addCase(getNoticesByQuery.rejected, handleRejected)
      .addCase(getNoticeById.pending, handlePending)
      .addCase(getNoticeById.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(getNoticeById.rejected, handleRejected)
      .addCase(addNotice.pending, handlePending)
      .addCase(addNotice.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(addNotice.rejected, handleRejected)
      .addCase(deleteNotice.pending, handlePending)
      .addCase(deleteNotice.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(deleteNotice.rejected, handleRejected);
  },
});

export const noticesReducer = noticesSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import {
  getNoticesByQuery,
  getNoticeById,
  addNotice,
  deleteNotice,
  getNoticesAddByUser,
  getFavoriteNotices,
  addNoticeToFavorites,
  removeNoticeFromFavorites,
} from 'redux/operations/fetchNotices';

const initialState = {
    notices: [],
    noticeById: {},
  isLoading: false,
  totalPages: 1
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
  reducers: {
    updateNotices(state, payload) {
      const updateNotices = [...state.notices].filter(
        item => item.id !== payload.payload
      )
      state.notices = updateNotices
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getNoticesByQuery.pending, handlePending)
      .addCase(getNoticesByQuery.fulfilled, (state, { payload }) => {
        state.notices = payload.notices;
        state.isLoading = false;
          state.totalPages = payload.totalPages;
          state.noticeById = {}
      })
      .addCase(getNoticesByQuery.rejected, handleRejected)
      .addCase(getNoticeById.pending, handlePending)
        .addCase(getNoticeById.fulfilled, (state, {payload}) => {
            state.noticeById = payload;
        state.isLoading = false;
      })
      .addCase(getNoticeById.rejected, handleRejected)
      .addCase(addNotice.pending, handlePending)
      .addCase(addNotice.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(addNotice.rejected, handleRejected)
      .addCase(deleteNotice.pending, handlePending)
      .addCase(deleteNotice.fulfilled, (state, {payload}) => {
        const updateNotices = [...state.notices].filter(
          item => item._id !== payload
        )
        state.notices = updateNotices;
        state.isLoading = false;
      })
      .addCase(deleteNotice.rejected, handleRejected)
      .addCase(getNoticesAddByUser.pending, handlePending)
      .addCase(getNoticesAddByUser.fulfilled, (state, { payload }) => {
        state.notices = payload.notices;
        state.totalPages = payload.totalPages;
          state.isLoading = false;
          state.noticeById = {}
      })
      .addCase(getNoticesAddByUser.rejected, handleRejected)
      .addCase(getFavoriteNotices.pending, handlePending)
      .addCase(getFavoriteNotices.fulfilled, (state, { payload }) => {
        state.notices = payload;
        state.isLoading = false;
        state.totalPages = payload.totalPages ?? 1
        state.noticeById = {}
      })
      .addCase(getFavoriteNotices.rejected, handleRejected)
      .addCase(addNoticeToFavorites.pending, handlePending)
      .addCase(addNoticeToFavorites.fulfilled, state => {
        state.isLoading = false;
        state.noticeById = {}
      })
      .addCase(addNoticeToFavorites.rejected, handleRejected)
      .addCase(removeNoticeFromFavorites.pending, handlePending)
      .addCase(removeNoticeFromFavorites.fulfilled, (state, { payload }) => {
        if (payload.category === 'favorite-ads') {
          const updateNotices = [...state.notices].filter(
            item => item._id !== payload.id
          )
          state.notices = updateNotices;
        }
        state.isLoading = false;
        state.noticeById = {}
      })
      .addCase(removeNoticeFromFavorites.rejected, handleRejected);
  },
});

export const noticesReducer = noticesSlice.reducer;
export const { updateNotices } = noticesSlice.actions;
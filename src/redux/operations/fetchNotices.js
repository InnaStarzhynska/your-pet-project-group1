import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://yorpet-backpart-deployment.onrender.com/api';

export const getNoticesByQuery = createAsyncThunk(
  'notices/getNoticesByQuery',
    async (credentials, thunkAPI) => {
    try {
      const queryURL = `/notice/search?searchQuery=${credentials.query}&category=${credentials.category}&page=${credentials.page}&limit=8`;
      const response = await axios.get(queryURL);
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNoticeById = createAsyncThunk(
  'notices/getNoticeById',
  async (credentials, thunkAPI) => {
    try {
      const queryURL = `/notice/${credentials._id}`;
        const response = await axios.get(queryURL);
        return response.data;
    } catch (error) {
      Notiflix.Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk('notices/addNotice', async (credentials, thunkAPI) => {
    try {
        const response = await axios.post('notice/add', credentials);
        return response.data;
    } catch (error) {
        Notiflix.Notify.failure(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteNotice = createAsyncThunk('notices/deleteNotice', async (credentials, thunkAPI) => {
    try {
        const queryURL = `/notice/delete/${credentials._id}`;
        const response = await axios.delete(queryURL);
        Notiflix.Notify.success(`Your notice has been successfully deleted!`);
        return response.data
    } catch (error) {
        Notiflix.Notify.failure(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const getNoticesAddByUser = createAsyncThunk('notices/getNoticesAddByUser', async (credentials, thunkAPI) => {
    try {
        const queryURL = `/added?${credentials.page}`;
        const response = await axios.get(queryURL);
        return response.data
    } catch (error) {
        Notiflix.Notify.failure(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});
 
export const getFavoriteNotices = createAsyncThunk('notices/getFavoriteNotices', async (_, thunkAPI) => {
    try {
        const responce = await axios.get('/notice/marked');
        return responce.data
    } catch (error) {
        Notiflix.Notify.failure(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addNoticeToFavorites = createAsyncThunk('notices/addNoticeToFavorites', async (credentials, thunkAPI) => {
    try {
        const queryURL = `/notice/mark/${credentials._id}`;
        const responce = axios.patch(queryURL);
        Notiflix.Notify.success(`The notice added to favorites!`);
        return responce.data
    } catch (error) {
        Notiflix.Notify.failure(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const removeNoticeFromFavorites = createAsyncThunk('notices/removeNoticeFromFavorites', async (credentials, thunkAPI) => {
     try {
        const queryURL = `/notice/unmark/${credentials._id}`;
        const responce = axios.patch(queryURL);
        Notiflix.Notify.success(`The notice removed from favorites!`);
        return responce.data
     } catch (error) {
        Notiflix.Notify.failure(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
     }
})

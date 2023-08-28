import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://yorpet-backpart-deployment.onrender.com/api';

export const getNoticesByQuery = createAsyncThunk(
  'notices/getNoticesByQuery',
    async (credentials, thunkAPI) => {
    try {
      const queryURL = `/notice?searchQuery=${credentials.query}&category=${credentials.category}&page=${credentials.page}`;
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
        const response = await axios.post('notice/addNotice', credentials);
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
})
 



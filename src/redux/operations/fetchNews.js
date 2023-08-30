import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

export const getNewsByQuery = createAsyncThunk('news/getNewsByQuery', async (credentials, thunkAPI) => {
    try {
        const queryURL = `/news?searchQuery=${credentials.query}&page=${credentials.page}&limit=8`;
      const response = await axios.get(queryURL);
      return response.data;
    } catch (error) {
         Notiflix.Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
})
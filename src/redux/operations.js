import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://yorpet-backpart-deployment.onrender.com";

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ''
};

export const registerUser = createAsyncThunk("auth/registerUser", async (credentials, thunkAPI) => {
    try {
        const responce = await axios.post('/api/auth/register', credentials);
        Notiflix.Notify.success(`User ${responce.data.user.name} is registered!`);
        setAuthHeader(responce.data.token);
        return responce.data
    } catch (error) {
        Notiflix.Notify.failure(error.response.data.message)
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logIn = createAsyncThunk("auth/logIn", async (credentials, thunkAPI) => {
    try {
        const responce = await axios.post('/api/auth/login', credentials);
         Notiflix.Notify.success(`Welcome, ${responce.data.user.name}!`);
        setAuthHeader(responce.data.token);
        return responce.data
    } catch (error) {
        Notiflix.Notify.failure(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
    try {
        const responce = await axios.post('/api/auth/logout');
        clearAuthHeader();
        Notiflix.Notify.success(`Log out successfully completed.`);
        return responce.data
    } catch (error) {
        Notiflix.Notify.failure(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const getCurrentUser = createAsyncThunk("auth/getCurrentUser", async (_, thunkAPI) => {
        const { token } = thunkAPI.getState().auth;
    if (!token) {
        return thunkAPI.rejectWithValue()
    }
    setAuthHeader(token);
    try { 
        const responce = await axios.get('/api/auth/current');
        return responce.data
    } catch (error) {
        Notiflix.Notify.failure(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
    }
})

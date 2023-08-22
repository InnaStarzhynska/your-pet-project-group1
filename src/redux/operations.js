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
        console.log(responce)
        setAuthHeader(responce.data.token);
        return responce.data
    } catch (error) {
        Notiflix.Notify.failure('Something went wrong. Try again!')
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logIn = createAsyncThunk("auth/logIn", async (credentials, thunkAPI) => {
    try {
        const responce = await axios.post('/api/auth/login', credentials);
        setAuthHeader(responce.data.token);
        return responce.data
    } catch (error) {
        console.log(error.message)
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
    try {
        const responce = await axios.post('/api/auth/logout');
        clearAuthHeader();
        return responce.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://yorpet-backpart-deployment.onrender.com/api";

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ''
};

export const registerUser = createAsyncThunk("user/registerUser", async (credentials, thunkAPI) => {
    try {
        const responce = await axios.post('/auth/register', credentials);
        Notiflix.Notify.success(`User ${responce.data.user.name} is registered!`);
        setAuthHeader(responce.data.token);
        return responce.data
    } catch (error) {
        Notiflix.Notify.failure(error.response.data.message)
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logIn = createAsyncThunk("user/logIn", async (credentials, thunkAPI) => {
    try {
        const responce = await axios.post('auth/login', credentials);
         Notiflix.Notify.success(`Welcome, ${responce.data.user.name}!`);
        setAuthHeader(responce.data.token);
        return responce.data
    } catch (error) {
        Notiflix.Notify.failure(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logOut = createAsyncThunk("user/logOut", async (_, thunkAPI) => {
    try {
        const responce = await axios.post('/auth/logout');
        clearAuthHeader();
        Notiflix.Notify.success(`Log out successfully completed.`);
        return responce.data
    } catch (error) {
        Notiflix.Notify.failure(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const getCurrentUser = createAsyncThunk("user/getCurrentUser", async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().user;
    if (!token) {
        return thunkAPI.rejectWithValue()
    }
    setAuthHeader(token);
    try {
        const responce = await axios.get('/auth/current');
        return responce.data
    } catch (error) {
        Notiflix.Notify.failure(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const getUserInfo = createAsyncThunk("user/getUserInfo", async (_, thunkAPI) => {
    try {
        const responce = await axios.get('/profile');
        return responce.data
    } catch (error) {
        Notiflix.Notify.failure(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const updateUserInfo = createAsyncThunk("user/updateUserInfo", async (credentials, thunkAPI) => {
    try {
        const responce = await axios.put('/auth/update', credentials);
        Notiflix.Notify.success(`Information changed successfully`);
        console.log(responce)
        return responce.data
    }
    catch (error) {
        console.log(error)
        Notiflix.Notify.failure(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addPet = createAsyncThunk('user/addPet', async (credentials, thunkAPI) => {
    try {
        const responce = await axios.post('/pets/add', credentials);
        Notiflix.Notify.success(`Your pet added!`);
        return responce.data
    } catch (error) {
        Notiflix.Notify.failure(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deletePet = createAsyncThunk('user/deletePet', async (credentials, thunkAPI) => {
try {
    const queryURL = `/pets/delete/${credentials._id}`;
    const responce = await axios.delete(queryURL);
    Notiflix.Notify.success(`Your pet has been successfully deleted`);
        return responce.data
} catch (error) {
    Notiflix.Notify.failure(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
}
})
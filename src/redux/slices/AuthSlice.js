import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import { logIn, logOut, registerUser } from 'redux/operations';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: {
    name: null,
    email: null,
    avatar: null,
    city: null,
    birthday: null,
    phone: null,
  },
  token: null,
    isLoggedIn: false,
  isRefreshing: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = {
                    name: null,
                    email: null,
                    avatar: null,
                    city: null,
                    birthday: null,
                    phone: null,
                };
                state.token = null;
                state.isLoggedIn = false;
            })
    }
});

const persistConfig = {
  key: 'auth',
    storage,
  whitelist: ['token']
};

export const authReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

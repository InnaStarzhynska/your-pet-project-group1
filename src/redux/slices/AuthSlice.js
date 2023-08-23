import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import { getCurrentUser, logIn, logOut, registerUser } from 'redux/operations';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: {
    name: null,
    email: null,
    avatar: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
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
      .addCase(logOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
          avatar: null
        };
        state.token = null;
        state.isLoggedIn = false;
      }).addCase(getCurrentUser.pending, (state) => {
            state.isRefreshing = true;
        }).addCase(getCurrentUser.fulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        }).addCase(getCurrentUser.rejected, (state) => {
            state.isRefreshing = false;
        })
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);

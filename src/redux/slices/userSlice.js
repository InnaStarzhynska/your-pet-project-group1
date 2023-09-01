import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import {
  addPet,
  deletePet,
  getCurrentUser,
  getUserInfo,
  logIn,
  logOut,
  registerUser,
  updateUserInfo,
} from 'redux/operations/fetchUser';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: {
    name: null,
    email: null,
    avatar: null,
    birthday: null,
    phone: null,
    city: null,
  },
  pets: [],
  token: null,
  isLoggedIn: false,
  isNewUser: false,
  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = state => {
  state.isLoading = false;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    statusNewUser(state, payload) {
      state.isNewUser = payload.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isNewUser = true;
      })
      .addCase(registerUser.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
          avatar: null,
          birthday: null,
          phone: null,
          city: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.pets = [];
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(getUserInfo.pending, handlePending)
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.pets = payload.pets;
        state.isLoading = false;
      })
      .addCase(getUserInfo.rejected, handleRejected)
      .addCase(getCurrentUser.pending, handlePending)
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.rejected, handleRejected)
      .addCase(updateUserInfo.pending, handlePending)
      .addCase(updateUserInfo.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(updateUserInfo.rejected, handleRejected)
      .addCase(addPet.pending, handlePending)
      .addCase(addPet.fulfilled, (state, { payload }) => {
        state.pets.push(payload);
        state.isLoading = false;
      })
      .addCase(addPet.rejected, handleRejected)
      .addCase(deletePet.pending, handlePending)
      .addCase(deletePet.fulfilled, (state, {payload}) => {
        const updatePets = [...state.pets].filter(
          item => item._id !== payload
        )
        state.pets = updatePets;
        state.isLoading = false;
      })
      .addCase(deletePet.rejected, handleRejected)
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const userReducer = persistReducer(persistConfig, userSlice.reducer);
export const { statusNewUser } = userSlice.actions;

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false
}
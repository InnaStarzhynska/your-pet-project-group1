export const selectUser = state => state.auth.user;

export const selectLoggedIn = state => state.auth.isLoggedIn;

export const selectRefreshing = state => state.auth.isRefreshing;
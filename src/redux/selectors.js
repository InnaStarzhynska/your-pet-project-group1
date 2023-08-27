export const selectUser = state => state.user.user;
export const selectLoggedIn = state => state.user.isLoggedIn;
export const selectLoadingUser = state => state.user.isLoading;
export const selectPets = state => state.user.pets;

export const selectNotices = state => state.notices.notices;
export const selectLoadingNotices = state => state.notices.isLoading;
export const selectTotalPages = state => state.notices.totalPages;
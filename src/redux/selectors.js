export const selectUser = state => state.user.user;
export const selectLoggedIn = state => state.user.isLoggedIn;
export const selectLoadingUser = state => state.user.isLoading;
export const selectPets = state => state.user.pets;

export const selectNotices = state => state.notices.notices;
export const selectLoadingNotices = state => state.notices.isLoading;
export const selectNoticesTotalPages = state => state.notices.totalPages;
export const selectNoticeById = state => state.notices.noticeById;

export const selectNews = state => state.news.news;
export const selectLoadingNews = state => state.news.isLoading;
export const selectPage = state => state.news.page;
export const selectNewsTotalPages = state => state.news.totalPages;

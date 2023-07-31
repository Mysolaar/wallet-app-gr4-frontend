export const selectName = (state) => state.user.username;

export const selectId = (state) => state.user._id;

export const selectIsFetchingCurrentUser = (state) =>
  state.auth.isFetchingCurrentUser;

export const selectIsAuth = (state) => state.auth.isAuth;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectToken = (state) => state.auth.token;

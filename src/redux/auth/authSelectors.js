export const selectToken = (state) => state.auth.token;
export const selectName = (state) => state.auth.user.name;
export const selectId = (state) => state.auth.user._id;

export const selectIsFetchingCurrentUser = (state) =>
  state.auth.isFetchingCurrentUser;

export const selectIsAuth = (state) => state.auth.isAuth;

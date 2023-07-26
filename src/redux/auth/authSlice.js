import { register, login, logout, fetchCurrentUser } from "./authOperations";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

const initialState = {
  user: { email: "", name: "" },
  token: null,
  isLoading: false,
  isAuth: false,
  isFetchingCurrentUser: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.token = null;
        state.user = { name: "", email: "" };
        state.isAuth = false;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload;
        state.isFetchingCurrentUser = false;
        state.isAuth = true;
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.isFetchingCurrentUser = false;
        state.token = null;
      })
      .addCase(login.fulfilled, (state) => {
        state.isAuth = true;
      })
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled),
        (state, { payload: { user, token } }) => {
          state.isLoading = false;
          state.user = user;
          state.token = token;

          state.error = null;
        }
      )

      .addMatcher(
        isAnyOf(register.rejected, login.rejected, fetchCurrentUser.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )

      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          logout.pending,
          fetchCurrentUser.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(register.rejected, login.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export default authSlice.reducer;

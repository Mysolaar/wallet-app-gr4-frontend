import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";
import cookie from "../../utils/cookie";
// import { useState, useEffect } from "react";

axios.defaults.baseURL = "https://wallet-app-x3a3.onrender.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://wallet-app-x3a3.onrender.com/api/users/auth/register",
        credentials
      );
      toast.success("Registration is successful!");
      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
      // return rejectWithValue(toast.error("Email is already in use"));
      throw error;
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://wallet-app-x3a3.onrender.com/api/users/auth/login",
        credentials
      );
      
      cookie.set("cookie_token", data.data.token, {
        expires: 7,
        secure: true,
      });
      token.set(data.data.token);

      // const [Token, setToken] = useState("");

      // useEffect(() => {
      //   localStorage.setItem("Token", Token);
      // }, [Token]);

      // setToken(data.data.token);
      toast.success(`Welcome, ${data.data.user.username}!`);
      return data;
    } catch (error) {
      return rejectWithValue(toast.error(`${error}`));
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.get("https://wallet-app-x3a3.onrender.com/api/users/logout");
      token.unset();
      cookie.remove("cookie_token");
      toast.success("You have been successfully logged out");
    } catch (error) {
      return rejectWithValue(
        toast.error("Something went wrong. Please, try again")
      );
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    const tokenLS = getState().auth.token;
    const refreshToken = cookie.get("cookie_token");
    const persistedAccessToken = getState().auth.token;

    if (!tokenLS) {
      return rejectWithValue("Token is missing");
    }

    if (refreshToken === null || persistedAccessToken === null) {
      return rejectWithValue();
    }

    token.set(tokenLS);
    try {
      const { data } = await axios.get(
        "https://wallet-app-x3a3.onrender.com/api/users/current"
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

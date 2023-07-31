import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createAsyncThunk } from "@reduxjs/toolkit";
import cookie from "../../utils/cookie";

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
      return data;
    } catch (error) {
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
        sameSite: "none",
      });
      token.set(data.data.token);

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
      await axios.post(
        "https://wallet-app-x3a3.onrender.com/api/users/auth/logout"
      );
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
  async (_, thunkAPI) => {
    const cookies = document.cookie;
    const cookie = cookies.split("=");
    const storedToken = cookie[1];

    if (storedToken) {
      token.set(storedToken);
    } else {
      return thunkAPI.rejectWithValue("Token is missing");
    }

    try {
      const { data } = await axios.get(
        "https://wallet-app-x3a3.onrender.com/api/users/current"
      );

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

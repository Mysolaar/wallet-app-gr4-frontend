import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://wallet-app-x3a3.onrender.com/";

export const getCurrentUser = createAsyncThunk(
  "user/getCurrentUser",
  async ({ token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://wallet-app-x3a3.onrender.com/api/users/current",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createAsyncThunk } from "@reduxjs/toolkit";
import getCookieToken from "../../utils/getCookieToken.js";

axios.defaults.baseURL = "https://wallet-app-x3a3.onrender.com";

export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async ({ _id, value }, { rejectWithValue }) => {
    try {
      const storedToken = getCookieToken();
      await axios.delete(`/api/transactions/${_id}`, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });
      toast.success("Your transaction is deleted!");

      const payload = { _id, value };

      return payload;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/transactions/`, payload);
      toast.success("Your transaction is added!");

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getTransactions = createAsyncThunk(
  "categories/getAllTransactions",
  async ({ token }, { rejectWithValue }) => {
    try {
      const storedToken = getCookieToken();
      const response = await axios.get("/api/transactions", {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editTransaction = createAsyncThunk(
  "transactions/editTransaction",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `/api/transactions/${payload._id}`,
        payload
      );
      toast.success("Your transaction is updated!");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getTransactionsMonthlySummary = createAsyncThunk(
  "categories/getTransactionsMonthlySummary",
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const storedToken = getCookieToken();

      const response = await axios.get(
        `api/transactions-summary?date=${String(month)}.${String(year)}`,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const setSelectedMonth = createAsyncThunk(
  "transactions/setSelectedMonth",
  async ({ month }, { rejectWithValue }) => {
    try {
      const response = month;

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const setSelectedYear = createAsyncThunk(
  "transactions/setSelectedYear",
  async ({ year }, { rejectWithValue }) => {
    try {
      const response = year;

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

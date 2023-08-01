import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://wallet-app-x3a3.onrender.com";

const cookies = document.cookie;
const cookie = cookies.split("=");
const storedToken = cookie[1];

export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (_id, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/transactions/${_id}`, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });
      toast.success("Your transaction is deleted!");
      return _id;
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
      console.log("error", error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getTransactions = createAsyncThunk(
  "categories/getAllTransactions",
  async ({ token }, { rejectWithValue }) => {
    try {
      console.log(storedToken);
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
  async ({ id, transaction }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/transactions/${id}`, transaction);
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
      const response = await axios.get(
        `api/transactions-summary?date=${month}-${year}`,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      console.log("TransactionSummary data: ", response.data.data);

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

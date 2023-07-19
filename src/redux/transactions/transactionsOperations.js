import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'http://localhost:3000';

export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (_id, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/transactions/${_id}`);
      toast.success("Your transaction is deleted!");
      return _id;
    } catch (error) {
      return rejectWithValue(error);
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
      return rejectWithValue(error);
    }
  }
);

export const getTransactions = createAsyncThunk(
  "categories/getAllTransactions",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/transactions", {
        headers: {
          Authorization: `Bearer ${token}`,
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

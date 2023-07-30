import { createSlice } from "@reduxjs/toolkit";
import {
  deleteTransaction,
  addTransaction,
  getTransactions,
  editTransaction,
} from "./transactionsOperations";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: {
      transactions: [],
    },
    balance: 0,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(deleteTransaction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addTransaction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.transactions = [...state.transactions, payload].sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getTransactions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTransactions.fulfilled, (state, { payload }) => {
        state.transactions = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getTransactions.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(editTransaction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editTransaction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.transactions.findIndex(
          (transaction) => transaction._id === payload._id
        );
        state.transactions[index] = payload;
        state.transactions = state.transactions.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
      })
      .addCase(editTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export default transactionsSlice.reducer;

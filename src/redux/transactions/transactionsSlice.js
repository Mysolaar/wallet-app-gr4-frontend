import { createSlice } from "@reduxjs/toolkit";
import {
  deleteTransaction,
  addTransaction,
  getTransactions,
  editTransaction,
  getTransactionsMonthlySummary,
  setSelectedMonth,
  setSelectedYear,
} from "./transactionsOperations";

const currentDate = new Date();

const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
const currentYear = String(currentDate.getFullYear());

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: {
      transactions: [],
    },
    monthlySummary: {},
    balance: 0,
    isLoading: false,
    error: null,
    selectedMonth: currentMonth,
    selectedYear: currentYear,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(deleteTransaction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;

        state.transactions.transactions =
          state.transactions.transactions.filter((transaction) => {
            return transaction._id !== payload;
          });
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
        state.transactions = {
          transactions: [
            ...state.transactions.transactions,
            payload.newTransaction,
          ],
        };
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
      .addCase(getTransactionsMonthlySummary.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getTransactionsMonthlySummary.fulfilled,
        (state, { payload }) => {
          state.monthlySummary = payload;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(getTransactionsMonthlySummary.rejected, (state, { payload }) => {
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
      })
      .addCase(setSelectedMonth.fulfilled, (state, { payload }) => {
        state.selectedMonth = payload;
      })
      .addCase(setSelectedYear.fulfilled, (state, { payload }) => {
        state.selectedYear = payload;
      }),
});

export default transactionsSlice.reducer;

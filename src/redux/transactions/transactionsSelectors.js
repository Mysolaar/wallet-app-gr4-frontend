export const selectTransactions = (state) =>
  state.transactions.transactions || [];
export const selectIsLoading = (state) => state.transactions.isLoading;
export const selectError = (state) => state.transactions.error;
export const selectBalance = (state) => state.transactions.balance;
export const selectTransactionsMonthlySummary = (state) =>
  state.transactions.monthlySummary;
export const selectSelectedMonth = (state) => state.transactions.selectedMonth;
export const selectSelectedYear = (state) => state.transactions.selectedYear;

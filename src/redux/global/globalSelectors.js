export const selectIsModalAddTransactionOpen = (state) =>
  state.global.isModalAddTransactionsOpen;

export const selectIsModalEditTransactionsOpen = (state) =>
  state.global.isModalEditTransactionsOpen;

export const selectIsModalDeleteTransactionsOpen = (state) =>
  state.global.isModalDeleteTransactionsOpen;

export const selectIsModalLogoutOpen = (state) =>
  state.global.isModalLogoutOpen;

export const selectCurrentPage = (state) => state.global.currentPage;

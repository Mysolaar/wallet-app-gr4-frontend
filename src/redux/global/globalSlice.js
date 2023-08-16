import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalAddTransactionsOpen: false,
  isModalEditTransactionsOpen: false,
  isModalDeleteTransactionsOpen: false,
  isModalLogoutOpen: false,
  currentPage: "Home",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state[action.payload] = true;
    },
    closeModal: (state, action) => {
      state[action.payload] = false;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { openModal, closeModal, setPage } = globalSlice.actions;

export default globalSlice.reducer;

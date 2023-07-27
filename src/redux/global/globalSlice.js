import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalAddTransactionsOpen: false,
  idModalLogoutOpen: false,
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
  },
});

export const { openModal, closeModal } = globalSlice.actions;

export default globalSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const createAccountSlice = createSlice({
  name: "createAccount",
  initialState: {
    isOpen: false
  },
  reducers: {
    openCreateAccount: (state) => {
      state.isOpen = true;
    },
    closeCreateAccount: (state) => {
      state.isOpen = false;
    }
  }
});

export const {
  openCreateAccount,
  closeCreateAccount
} = createAccountSlice.actions;

export default createAccountSlice.reducer;

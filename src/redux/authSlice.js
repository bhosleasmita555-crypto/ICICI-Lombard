import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoginOpen: false,
    step: "mobile", // mobile | otp
    mobile: "",
    isAuthenticated: false,
  },
  reducers: {
    openLogin: (state) => {
      state.isLoginOpen = true;
      state.step = "mobile";
    },
    closeLogin: (state) => {
      state.isLoginOpen = false;
      state.step = "mobile";
    },
    sendOtp: (state, action) => {
      state.mobile = action.payload;
      state.step = "otp";
    },
    verifyOtp: (state) => {
      state.isAuthenticated = true;
      state.isLoginOpen = false;
    },
  },
});

export const {
  openLogin,
  closeLogin,
  sendOtp,
  verifyOtp,
} = authSlice.actions;

export default authSlice.reducer;

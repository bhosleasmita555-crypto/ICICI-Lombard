import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import createAccountReducer from "./createAccountSlice"; 

export const store = configureStore({
  reducer: {
    auth: authReducer,
    createAccount: createAccountReducer, 
  },
});

import { createSlice } from "@reduxjs/toolkit";
const initialState = false;
const AuthSilce = createSlice({
  name: "AuthSilce",
  initialState,
  reducers: {
    isLoggedIn: (state, action) => {
      return (state = true);
    },
    isLoggedOut: (state, action) => {
      return (state = false);
    },
  },
});

export const {  isLoggedIn, isLoggedOut } = AuthSilce.actions;

export default AuthSilce.reducer

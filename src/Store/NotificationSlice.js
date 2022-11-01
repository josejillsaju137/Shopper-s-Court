import { createSlice } from "@reduxjs/toolkit";

const initialState = { notification: null };

const NotificationSlice = createSlice({
  name: "notificationSlice",
  initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});

export const notificationSlice = NotificationSlice.actions;

export default NotificationSlice.reducer;

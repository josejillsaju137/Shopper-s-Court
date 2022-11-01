import { configureStore } from "@reduxjs/toolkit";
import AuthSilce from "./AuthSilce";
import cartSlice from "./cartSlice";
import NotificationSlice from "./NotificationSlice";

const store = configureStore({
  reducer: {
    auth: AuthSilce,
    cartSlice:cartSlice,
    uiNotificationSlice:NotificationSlice,
  },
});
export default store;

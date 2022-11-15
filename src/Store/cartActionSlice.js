import { notificationSlice } from "./NotificationSlice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      notificationSlice.showNotification({
        open: true,
        message: "Sending Request",
        type: "warning",
      })
    );
    const sendRequest = async () => {
      const res = await fetch(
        "https://shopper-s-court-default-rtdb.firebaseio.com/cartitems.json",
        {
          method: "put",
          body: JSON.stringify(cart),
        }
      );
      // const data = await res.json();
      dispatch(
        notificationSlice.showNotification({
          open: true,
          message: "Sending Request to datata base",
          type: "success",
        })
      );
    };
    try {
      await sendRequest();
    } catch (err) {
      dispatch(
        notificationSlice.showNotification({
          open: true,
          message: "Sending Request failed",
          type: "error",
        })
      );
    }
  };
};

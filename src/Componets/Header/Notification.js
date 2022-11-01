import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { notificationSlice } from "../../Store/NotificationSlice";

const Notification = ({ type, message }) => {
  const dispatch = useDispatch();
  const notification = useSelector(
    (state) => state.uiNotificationSlice.notification
  );

  const handleClose = () => {
    dispatch(notificationSlice.showNotification({ open: false }));
  };
  return (
    <div>
      {notification.open ? (
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      ) : (
        ""
      )}
    </div>
  );
};

export default Notification;

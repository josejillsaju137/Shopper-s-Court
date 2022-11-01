import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Login from "./Componets/Auth/Login";
import Notification from "./Componets/Header/Notification";
import Home from "./Componets/Home/Home";
import { sendCartData } from "./Store/cartSlice";
import { notificationSlice } from "./Store/NotificationSlice";
let firstLoading = true;

function App() {
  const dispatch = useDispatch();
  const isLogedIn = useSelector((state) => state.auth);
  const noti = useSelector((state) => state.uiNotificationSlice.notification);
  const cart = useSelector((state) => state.cartSlice);
  console.log(firstLoading);
  useEffect(() => {
    if (firstLoading) {
      console.log("if", firstLoading);
      firstLoading = false;
      return;
    }
    dispatch(sendCartData(cart));
    // const sendRequest = async () => {
    //   // dispatch(
    //   //   notificationSlice.showNotification({
    //   //     open: true,
    //   //     message: "Sending Request",
    //   //     type: "warning",
    //   //   })
    //   // );

    //   const res = await fetch(
    //     "https://shopper-s-court-default-rtdb.firebaseio.com/cartitems.json",
    //     {
    //       method: "put",
    //       body: JSON.stringify(cart),
    //     }
    //   );
    //   // const data = await res.json();
    //   dispatch(
    //     notificationSlice.showNotification({
    //       open: true,
    //       message: "Sending Request to datata base",
    //       type: "success",
    //     })
    //   );
    // };
    // sendRequest().catch((err) => {
    //   // dispatch(
    //   //   notificationSlice.showNotification({
    //   //     open: true,
    //   //     message: "Sending Request failed",
    //   //     type: "error",
    //   //   })
    //   // );
    // });
  }, [cart, dispatch]);

  return (
    <div className="app">
      {noti && <Notification type={noti.type} message={noti.message} />}
      {isLogedIn && <Home />}
      {!isLogedIn && <Login />}

      {/* <Home/> */}
    </div>
  );
}

export default App;

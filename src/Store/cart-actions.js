import { CartActions } from "./cart-slice";
import { visibilityActions } from "./visibility-slice";

export const showDataFromCart = () => {
  return async (dispatch) => {
    const sendData = async () => {
      const response = await fetch(
        "https://react-http-myproject-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("can not fetch the data");
      }
      const responseData = await response.json();
      return responseData;
    };
    try {
      const data = await sendData();
      dispatch(
        CartActions.replaceItem({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        })
      );
    } catch (err) {
      dispatch(
        visibilityActions.showNotification({
          status: "Error",
          title: "!Error 💣",
          message: "🤡 failed to send data",
        })
      );
    }
  };
};

export const sendDataToCart = (cart) => {
  return async (dispatch) => {
    dispatch(
      visibilityActions.showNotification({
        status: "pending",
        title: "pending....",
        message: "data is pending now",
      })
    );
    // ---------- this is thunk function -------------
    const sendData = async () => {
      const response = await fetch(
        "https://react-http-myproject-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("sending data is failed");
      }
    };
    try {
      await sendData();
      dispatch(
        visibilityActions.showNotification({
          status: "success",
          title: "Success 👍",
          message: "🎉 data sent successfully",
        })
      );
    } catch (error) {
      dispatch(
        visibilityActions.showNotification({
          status: "Error",
          title: "!Error 💣",
          message: "🤡 failed to send data",
        })
      );
    }
  };
};

import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendDataToCart, showDataFromCart } from "./Store/cart-actions";

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.isVisible.isVisible);
  const cart = useSelector((state) => state.cartItem);
  const notification = useSelector((state) => state.isVisible.notification);

  useEffect(() => {
    dispatch(showDataFromCart());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendDataToCart(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
};
export default App;

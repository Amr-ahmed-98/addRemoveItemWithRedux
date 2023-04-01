import { useDispatch, useSelector } from "react-redux";
import { visibilityActions } from "../../Store/visibility-slice";
import classes from "./CartButton.module.css";
const CartButton = () => {
  const numItems = useSelector((item) => item.cartItem.totalQuantity);
  const dispatch = useDispatch();
  const buttonHandler = () => {
    dispatch(visibilityActions.isVisible());
  };
  return (
    <button className={classes.button} onClick={buttonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numItems}</span>
    </button>
  );
};
export default CartButton;

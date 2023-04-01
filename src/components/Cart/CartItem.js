import { useDispatch } from "react-redux";
import { CartActions } from "../../Store/cart-slice";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(CartActions.removeItem(id));
  };
  const addItemHandler = () => {
    dispatch(
      CartActions.addItem({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <div className={classes["name-nd-price"]}>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemPrice}>($ {price.toFixed(2)}/item)</span>
        </div>
      </div>
      <div className={classes["quantity-nd-btn"]}>
        <div className={classes.quantity}>
          <span>x {quantity}</span>
        </div>
        <div className={classes.buttons}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};
export default CartItem;

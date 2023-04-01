import { useDispatch } from "react-redux";
import { CartActions } from "../../Store/cart-slice";
import classes from "./ProductsItem.module.css";
const ProductsItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, brief, id } = props;

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
    <li className={classes.content}>
      <div className={classes["title-nd-price"]}>
        <h2>{title}</h2>
        <span>{`$ ${price.toFixed(2)}`}</span>
      </div>
      <p className={classes.brief}>{brief}</p>
      <div className={classes.button}>
        <button onClick={addItemHandler}>Add To Cart</button>
      </div>
    </li>
  );
};
export default ProductsItem;

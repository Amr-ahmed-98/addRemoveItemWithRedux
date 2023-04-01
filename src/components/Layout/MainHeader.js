import { Fragment } from "react";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <Fragment>
      <div className={classes.content}>
        <div className={classes.title}>
          <h1> item with redux </h1>
        </div>
        <div className={classes.button}>
          <CartButton />
        </div>
      </div>
    </Fragment>
  );
};
export default MainHeader;

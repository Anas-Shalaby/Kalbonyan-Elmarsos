import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../store/cart-context";
import { useContext } from "react";
import { useEffect, useState } from "react";
const HeaderCartButton = (props) => {
  const [btnIsHigh, setBtnIsHigh] = useState(false);
  const CartCtx = useContext(cartContext);

  const { items } = CartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHigh ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHigh(true);

    const cleanUp = setTimeout(() => {
      setBtnIsHigh(false);
    }, 300);

    return () => {
      clearTimeout(cleanUp);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

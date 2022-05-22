import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const [buttonAnimation, setButtonAnimation] = useState(false);
  const context = useContext(CartContext);
  const { items } = context;
  const totalCartItems = items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);
  const buttonStyles = `${styles.button} ${buttonAnimation ? styles.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonAnimation(true);
    const timer = setTimeout(() => {
      setButtonAnimation(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={buttonStyles} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart </span>
      <span className={styles.badge}>{totalCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

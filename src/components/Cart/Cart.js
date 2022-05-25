import styles from "./Cart.module.css";
import Modal from "../UI_COMPONENTS/Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const [isWantToOrder, setIsWantToOrder] = useState(false);
  const totalAmount = `₪${cartContext.totalAmount.toFixed(2)}`;
  const cartHasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (itemId) => {
    cartContext.removeItem(itemId);
  };
  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const cartOrderHandler = () => {
    setIsWantToOrder(true);
  };
  const cancelOrderHandler = () => {
    props.onClick();
  };

  const checkoutForm = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={cancelOrderHandler}>
        Close
      </button>
      {cartHasItems && (
        <button onClick={cartOrderHandler} className={styles.button}>
          Order
        </button>
      )}
    </div>
  );

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          data={item}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onClick}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isWantToOrder && <CheckoutForm onCancel={props.onClick}></CheckoutForm>}
      {!isWantToOrder && checkoutForm}
    </Modal>
  );
};
export default Cart;

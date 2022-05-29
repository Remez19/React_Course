import styles from "./Cart.module.css";
import Modal from "../UI_COMPONENTS/Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
import React from "react";
const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSumbit, setDidSumbit] = useState(false);
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
  const orderHandler = async (userData) => {
    setIsSubmitting(true);
    const response = await fetch(
      "https://react-udemy-course-http-71ec4-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: cartContext.items,
        }),
      }
    );
    if (!response.ok) {
      // Handle error
    }
    setIsSubmitting(false);
    setDidSumbit(true);
    cartContext.clearCart();
  };
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
  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isWantToOrder && (
        <CheckoutForm
          onCancel={props.onClick}
          onOrder={orderHandler}
        ></CheckoutForm>
      )}
      {!isWantToOrder && checkoutForm}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data!</p>;
  const didSumbitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={styles.actions}>
        <button className={styles.button} onClick={cancelOrderHandler}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClick={props.onClick}>
      {!isSubmitting && !didSumbit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSumbit && didSumbitModalContent}
    </Modal>
  );
};
export default Cart;

import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `₪${props.data.price.toFixed(2)}`;

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.data.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{price}</span>
          <span className={styles.amount}>x {props.data.amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={props.data.onRemove}>−</button>
        <button onClick={props.data.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

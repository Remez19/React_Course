import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
const Meal = (props) => {
  const cartContext = useContext(CartContext);
  const priceForamt = `₪${props.data.price.toFixed(2)}`;
  const addItemToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.data.id,
      name: props.data.name,
      amount: amount,
      price: props.data.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.data.name}</h3>
        <div className={styles.description}>{props.data.description}</div>
        <div className={styles.price}>{priceForamt}</div>
      </div>
      <div>
        <MealItemForm
          id={props.data.id}
          onAddToCart={addItemToCartHandler}
        ></MealItemForm>
      </div>
    </li>
  );
};

export default Meal;

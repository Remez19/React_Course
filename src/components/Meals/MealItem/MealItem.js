import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const Meal = (props) => {
  const priceForamt = `₪${props.data.price.toFixed(2)}`;
  //
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.data.name}</h3>
        <div className={styles.description}>{props.data.description}</div>
        <div className={styles.price}>{priceForamt}</div>
      </div>
      <div>
        <MealItemForm id={props.data.id}></MealItemForm>
      </div>
    </li>
  );
};

export default Meal;

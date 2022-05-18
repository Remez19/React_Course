import React from "react";
import styles from "./MealsSummary.module.css";
const MealsSummary = () => {
  return (
    <summary className={styles.summary}>
      <h2>Delicious HandMade Meals To Your Door Step!</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </summary>
  );
};
export default MealsSummary;

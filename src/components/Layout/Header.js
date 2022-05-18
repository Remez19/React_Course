import React from "react";
import MealImg from "../../Assets/food.jpg";
import styles from "./Header.module.css";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Remez's Cuisine</h1>
      </header>
      <div className={styles.main_image}>
        <img src={MealImg} alt="Delicious Food!"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;

import MealItem from "./MealItem/MealItem";
import Card from "../UI_COMPONENTS/Card";
import styles from "./AvailableMeals.module.css";
import useHttp from "../../hooks/use-http";
import React, { useCallback, useEffect, useState } from "react";
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const getrRequestParams = useCallback(() => {
    return {
      url: "https://react-udemy-course-http-71ec4-default-rtdb.firebaseio.com/meals.json",
      method: "GET",
    };
  }, []);

  const mealDataTransfomer = useCallback((data) => {
    let tempMeals = [];
    for (const key in data) {
      tempMeals.push({
        id: key,
        ...data[key],
      });
    }
    setMeals(tempMeals);
  }, []);

  const { isLoading, hasError, sendRequest } = useHttp(
    getrRequestParams,
    mealDataTransfomer
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (isLoading) {
    return (
      <section className={styles.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  if (hasError) {
    return (
      <section className={styles.MealsLoading}>
        <p>Error!</p>
      </section>
    );
  }
  const allMeals = meals.map((meal) => {
    return <MealItem data={meal} key={meal.id} />;
  });
  return (
    <section className={styles.meals}>
      <Card>
        {hasError && <p>{hasError}</p>}
        {!hasError && <ul>{allMeals}</ul>}
      </Card>
    </section>
  );
};
export default AvailableMeals;

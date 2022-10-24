import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const onAddIngredientHandler = (newIngredient) => {
    setIngredients((prevIngredients) => [
      ...ingredients,
      { id: Math.random().toString(), ...newIngredient },
    ]);
    // console.log(ingredients);
  };
  const onRemoveIngredientHandler = (ingredientId) => {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient.id !== ingredientId)
    );
  };
  return (
    <div className="App">
      <IngredientForm addIngredient={onAddIngredientHandler} />

      <section>
        <Search />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={onRemoveIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;

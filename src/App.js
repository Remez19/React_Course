import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cart-provider";
function App() {
  const [cartVisability, setCartVisability] = useState(false);

  const cartVisabilityHandler = () => {
    setCartVisability((prevState) => {
      return !prevState;
    });
  };

  return (
    <CartProvider>
      {cartVisability && <Cart onClick={cartVisabilityHandler} />}
      <Header onClick={cartVisabilityHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;

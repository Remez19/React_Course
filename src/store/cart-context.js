import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  remItem: (item_id) => {},
  clearCart: () => {},
});
export default CartContext;

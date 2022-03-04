import React from 'react';

// this works as an interface
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: (id) => {}
});

export default CartContext;

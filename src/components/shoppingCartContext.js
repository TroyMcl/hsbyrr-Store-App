import React, { useState, createContext } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = props => {
  const [ shoppingCart, useShoppingCart ] = useState([]);

  const addToCart = (e, item) => {
    console.log(e, item);
    const index = shoppingCart.findIndex((itemObj => itemObj.item === item));
    if (index === -1) {
      const updatedShoppingCart = [...shoppingCart, {item, qty: 1}];
      useShoppingCart(updatedShoppingCart);
    } else {
      shoppingCart[index].qty++;
      useShoppingCart([...shoppingCart]);
    }
  };

  const adjustQty = (item, num) => {
    const index = shoppingCart.findIndex((itemObj => itemObj.item === item));
    if (index !== -1) {
      shoppingCart[index].qty += num;
      let newCart = [];
      for(let currProd of shoppingCart) {
        console.log(currProd)
        console.log(currProd.size)
        if (currProd.qty > 0) {
          newCart.push(currProd)
        }
      }
      useShoppingCart(newCart)
    } else if (index === -1 && num === 1) {
      useShoppingCart([...shoppingCart, {item, qty: 1}])
    }
  }

  return (
    <ShoppingCartContext.Provider value={[shoppingCart, useShoppingCart, addToCart, adjustQty]}>
      { props.children }
    </ShoppingCartContext.Provider>
  )
}
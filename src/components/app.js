import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';

import theme from '../theme';
import StoreList from './products/StoreList';
import Header from './Header';
import ItemView from './products/ItemView';
import Checkout from './checkout/Checkout';
import Cart from './cart/Cart'

const App = (props) => {
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
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <BrowserRouter>
          <Grid item>
            <Header />
          </Grid>
          <Grid item container>
            <Grid item xs={1} sm={2} />
              <Grid item xs={12} sm={8}>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => <StoreList {...props} addToCart={addToCart}/>}
                />
                <Route
                  path="/product/:id"
                  exact
                  component={ItemView}
                />
                <Route
                  path="/cart"
                  exact
                  render={(props) => <Cart {...props} shoppingCart={shoppingCart} adjustQty={adjustQty}/>}
                />
                <Route
                  path="/checkout"
                  exact
                  render={(props) => <Checkout {...props} shoppingCart={shoppingCart}/>}
                />
                </Switch>
              </Grid>
            <Grid item xs={1} sm={2} />
          </Grid>
        </BrowserRouter>
      </Grid>
    </ThemeProvider>
  )
}

export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import StoreList from './products/StoreList';
import Header from './Header';
import ItemView from './products/ItemView';
import Checkout from './checkout/Checkout';
import Cart from './cart/Cart'

const App = (props) => {
  const [ shoppingCart, useShoppingCart ] = useState([]);

  const addToCart = (e, item) => {
    console.log(e, item);
    const updatedShoppingCart = [...shoppingCart, item];
    useShoppingCart(updatedShoppingCart);
  };

  return (
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
                render={(props) => <Cart {...props} shoppingCart={shoppingCart}/>}
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
  )
}

export default App;
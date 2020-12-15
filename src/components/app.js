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
import { ShoppingCartProvider } from './shoppingCartContext';

const App = (props) => {

  return (
    <ThemeProvider theme={theme}>
      <ShoppingCartProvider>
        <Grid container direction="column">
          <BrowserRouter>
            <Grid item>
              <Header />
            </Grid>
            <Grid item container>
              <Grid item xs={1} sm={1} />
              <Grid item xs={12} sm={10}>
                <Switch>
                  <Route
                    path="/"
                    exact
                    render={(props) => <StoreList {...props} />}
                  />
                  <Route
                    path="/product/:id"
                    exact
                    component={ItemView}
                  />
                  <Route
                    path="/cart"
                    exact
                    // render={(props) => <Cart {...props} shoppingCart={shoppingCart} adjustQty={adjustQty}/>}
                    render={(props) => <Cart {...props} />}
                  />
                  <Route
                    path="/checkout"
                    exact
                    // render={(props) => <Checkout {...props} shoppingCart={shoppingCart}/>}
                    render={(props) => <Checkout {...props} />}
                  />
                </Switch>
              </Grid>
              <Grid item xs={1} sm={1} />
            </Grid>
          </BrowserRouter>
        </Grid>
      </ShoppingCartProvider>
    </ThemeProvider>
  )
}

export default App;
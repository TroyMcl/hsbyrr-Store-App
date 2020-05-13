import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import products from '../apis/products';

import StoreList from './products/StoreList';
import Header from './Header';
import ItemView from './products/ItemView';
import Checkout from './checkout/Checkout';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: [],
    }
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(item) {
    console.log(item)
    const shoppingCart = [...this.state.shoppingCart, item];
    this.setState({ shoppingCart })
  };

  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <StoreList {...props} addToCart={this.addToCart}/>}
            />
            <Route
              path="/product/:id"
              exact
              component={ItemView}
            />
            <Route
              path="/cart"
              exact
              render={(props) => <Checkout {...props} shoppingCart={this.state.shoppingCart}/>}
            />
          </Switch>
        </div>

        </BrowserRouter>
      </div>
    )
  }
}

export default App;
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import products from '../apis/products';

import StoreList from './StoreList';
import Header from './Header';
import ItemView from './ItemView';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={StoreList} />
          <Route path="/product/:id" exact component={ItemView} />
        </Switch>
      </div>

      </BrowserRouter>
    </div>
  )
}

export default App;
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import products from '../apis/products';

import StoreList from './StoreList';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={StoreList} />
        </Switch>
      </div>

      </BrowserRouter>
    </div>
  )
}

export default App;
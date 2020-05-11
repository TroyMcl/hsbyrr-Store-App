import React from 'react';
import products from '../apis/products';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  };

  componentDidMount() {
    products.get('/products')
    .then(prod => {
      this.setState({ products: prod.data.data.products });
      console.log(prod.data.data.products)
    })
  };

  render () {
    return (
    <div>
      <p>Stuff from server here</p>
    </div>
    )
  }
}

export default App;
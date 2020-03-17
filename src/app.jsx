import React from 'react';
import ReactDOM from 'react-dom';
import Shop from './components/shop.jsx'
import Item from './components/item.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'product',
      products: [],
      selectedProd: {
        imgLarge: 'http://lorempixel.com/640/480/abstract',
        itemName: 'Incredible Cotton Towels',
        price: '457.00',
        inStock: true,
        materials: 'Voluptas voluptatem voluptatum sit sed laboriosam quis voluptas ducimus omnis.',
        description: 'Natus officia unde in. Ducimus commodi vitae est quos tempore pariatur. Animi ad saepe voluptas dolores eos et in reiciendis accusamus. Dicta neque et cumque et alias.',
        shippingCost: 'FREE',
        productId: 'ID2',
        onSale: false
      }
    }
  }

  componentDidMount() {
    fetch(`/products`, {
      method: 'get',
    })
    .then((response) => response.json())
    .then((prods) => this.setState({products: prods}))
  }

  render() {
    //options 'store', 'product'

    if (this.state.page === 'store') {
      return (
        <div>
          <h1>Webpack, react and server test!</h1>
          <Shop products={this.state.products}/>
        </div>
      );
    }
    if (this.state.page === 'product') {
      return (
        <div>
          <Item item={this.state.selectedProd} />
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('store'))
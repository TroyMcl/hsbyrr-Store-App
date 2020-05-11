import React from 'react';
import products from '../apis/products';
import StoreItem from './StoreItem';

class StoreList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    products.get('/products')
    .then(prod => {
      this.setState({products: prod.data.data.products})
    })
  };

  render() {
    if (this.state.products.length === 0) {
      return <div>No products</div>
    }

    return (
      <div className="ui items">
        {this.state.products.map(product => {
          return <StoreItem product={product} key={product.prodId}/>
        })}
      </div>
    )
  }
};

export default StoreList;
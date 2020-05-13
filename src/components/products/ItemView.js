import React from 'react';
import products from '../../apis/products';

class ItemView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    products.get(`/products/${this.props.match.params.id}`)
    .then(product => {
      this.setState({product: product.data.data.product})
    })
  }

  render() {
    return (
      <div className="ui items">
        <div className="item">
          <div className="image ui medium round image">
            <img src={this.state.product.image} />
          </div>
          <div className="content">
            <h1 className="header">{this.state.product.itemName}</h1>
            <h3 >{`$ ${this.state.product.price}.00`}</h3>
          </div>
        </div>
        <div className="meta">
          <div className="header">Item Materials: {this.state.product.materials}</div>
        </div>
        <div className="item">
          {this.state.product.description}
        </div>
      </div>
    )
  }
};

export default ItemView;
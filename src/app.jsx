import React from 'react';
import ReactDOM from 'react-dom';
import Shop from './components/shop.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'store',
      products: [],
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
  }
}

ReactDOM.render(<App />, document.getElementById('store'))
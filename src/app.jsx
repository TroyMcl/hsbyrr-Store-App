import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shop from './components/shop.jsx';
import NavBar from './components/NavBar.jsx'
import Item from './components/item.jsx';
import ButtonAppBar from './components/NavBar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'store',
      products: [],
      searchString: '',
    }
  }
  //this might need adjusted to work with my code
  onSearchInputChange(e) {
    if (e.target.value) {
      this.setState({searchString: e.target.value})
    } else {
      this.setState({searchString: ''})
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
    return (
      <div>
        <ButtonAppBar />
        <Shop products={this.state.products}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('store'))
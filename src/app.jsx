import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: 1
    }
  }

  render() {
    return (
      <div>
        <h1>Webpack, react and server test!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('store'))
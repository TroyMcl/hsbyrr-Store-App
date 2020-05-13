import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary menu">
      <Link to="/" className="item">
        Store
      </Link>
      <div>
        <Link to="/cart" className="item">
          Shopping Cart
        </Link>
      </div>
    </div>
  )
};

export default Header;
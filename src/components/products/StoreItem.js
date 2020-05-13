import React from 'react';
import { Link } from 'react-router-dom';
import ItemView from './ItemView';

const StoreItem = ({ product, addToCart }) => {
  const { image, itemName, materials, description, shippingCost, prodId } = product;
  return (
    <div className="item">
      <div className="image">
        <img src={image[0]} />
      </div>
      <div className="content">
        <Link className="header" to={`/product/${prodId}`}>{itemName}</Link>
        <div className="meta">
          <span>Description</span>
          <p>{description}</p>
        </div>
        <div className="extra">
          <span>Materials</span>
          <p>{materials}</p>
        </div>
        <button className="ui primary button" value={prodId} onClick={(e) => addToCart(e.target.value)}>
          Add to cart
        </button>
      </div>

    </div>
  )
}

export default StoreItem;
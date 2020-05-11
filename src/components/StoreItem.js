import React from 'react';

const StoreItem = ({product}) => {
  const { image, itemName, materials, description, shippingCost } = product;
  return (
    <div className="item">
      <div className="image">
        <img src={image[0]} />
      </div>
      <div className="content">
        <a className="header">{itemName}</a>
        <div className="meta">
          <span>Description</span>
          <p>{description}</p>
        </div>
        <div className="extra">
          <span>Materials</span>
          <p>{materials}</p>
        </div>
      </div>

    </div>
  )
}

export default StoreItem;
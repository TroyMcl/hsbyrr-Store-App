import React from 'react';
//template for product item pages
function Item({ item }) {
  return (
    <div>
      <img src={item.imgLarge}/>
      <div id="item-side">
        <p2>{item.itemName}</p2>
        <p2>{item.price}</p2>
        <p>{item.inStock}</p>
        <p>{item.shippingCost}</p>
        <button>Add to Cart</button>
      </div>
      <div>
        <h3>{item.materials}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default Item;
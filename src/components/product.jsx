import React from 'react';
//template for products to display in store
function Product({ product }) {
  return (
    <div>
      <img src={product.imgLarge} alt={product.itemName} width="350px"/>
      <div id="item-description">
        <h3>{product.itemName}</h3>
        <h3>{product.price}</h3>
        <p>{product.inStock}</p>
        <h4>{product.materials}</h4>
        <p>{product.shippingCost}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product;
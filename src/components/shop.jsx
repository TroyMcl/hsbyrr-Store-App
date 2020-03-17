import React from 'react';
import Product from './product.jsx'

function Shop({ products }) {
  return (
    <div id='store-products'>
        {products.map(product => <Product product={product}/>)}
    </div>
  )
}

export default Shop;
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
//template for products to display in store
function Product({ product }) {
  console.log(product.imgLarge)
  return (
    <Grid container={24} style={{padding: 24, borderBottom: '1.5px solid grey'}}>
      <div className="shop-image" style={{padding:24}}>
        <img src={product.imgLarge} alt={product.itemName} width="350px"/>
      </div>
      <div className="item-info">
        <h1>{product.itemName}</h1>
        <h2>$ {product.price}</h2>
        <p>{product.inStock === 1? 'Item is in Stock' : 'Item is curently Unavailable'}</p>
        <h4>{product.materials}</h4>
        <p><bold>{product.shippingCost}</bold></p>
        <Button
          variant='contained'
          color='secondary'
          className='shoppinCartBtn'
          startIcon={<AddShoppingCartIcon />}
        >
          Add to Cart
        </Button>
      </div>
    </Grid>
  )
}

export default Product;
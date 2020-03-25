import React from 'react';
import Product from './product.jsx';
import Grid from '@material-ui/core/Grid';


function Shop({ products }) {
  return (
    <Grid
      container direction="column"
      justify="space-around"
      alignItems="center"
    >
      {products.map(product => <Product product={product}/>)}
    </Grid>

  )
}

export default Shop;
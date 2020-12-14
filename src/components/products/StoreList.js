import React, { useState, useEffect } from 'react';
import products from '../../apis/products';
import StoreItem from './StoreItem';
import { Grid } from '@material-ui/core';

const StoreList = (props) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    products.get('api/products')
    .then(prod => {
      setProductList(prod.data.data.products);
    })
  }, []);

  if (productList.length === 0) {
    return <div>Loading</div>
  }

  return (
    <Grid container alignItems="stretch" spacing={4}>
      {productList.map(product => {
        return (
        <Grid item xs={12} sm={6} md={5} lg={4} style={{display: "flex"}} key={product.prodId}>
          {/* <StoreItem product={product} addToCart={props.addToCart}/> */}
          <StoreItem product={product} />
        </Grid>
        )
      })}
    </Grid>
  )
}

export default StoreList;
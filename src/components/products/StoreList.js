import React, { useState, useEffect } from 'react';
import products from '../../apis/products';
import StoreItem from './StoreItem';
import {
  Grid,
  Checkbox,
  List,
  ListItem,
  Divider,
  makeStyles,
  Typography,
  FormControlLabel
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  sideBar: {

  }
}))

const StoreList = (props) => {
  const [productList, setProductList] = useState([]);
  const classes = useStyles();

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
      <Grid item xs={12} sm={3} md={3} lg={3} className={classes.sideBar}>
        <Typography align="center" color="primary" variant="h6" >Category #1</Typography>
        <Divider />
          <List>
            <Typography align="left">Select a Category</Typography>
            {["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7"].map((text, i) => (
              <ListItem
                      key={i}
                      alignItems="flex-start"
                      dense={true}
                      button={true}
                      >
                <FormControlLabel control={<Checkbox name={text} />} label={text} />
              </ListItem>
            ))}
          </List>
      </Grid>
      <Grid item item xs={12} sm={9} md={9} lg={9} className={classes.main}>
        {productList.map(product => {
          return (
            <StoreItem product={product} key={product.prodId}/>
          )
        })}
      </Grid>
    </Grid>
  )

}

export default StoreList;
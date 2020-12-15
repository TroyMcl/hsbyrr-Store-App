import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ShoppingCartContext } from '../shoppingCartContext';

import { makeStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import {
  Typography,
  Button,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles({
  itemView: {
    marginTop: '25px',
    borderBottom: '1px solid #D3D3D3'
  },
  link: {
    textDecoration: 'none',
  },
  cartButton: {
    width: '100%',
    backgroundColor: '#fadd5a',
    '&:hover': {
      backgroundColor: '#fae55a'
    }
  },
});


const StoreItem = ({ product }) => {
  const { images, itemName, onSale, price, prodId, freeShipping } = product;
  const [shoppingCart, useShoppingCart, addToCart, adjustQty] = useContext(ShoppingCartContext)
  const classes = useStyles();
  return (
    <Grid container spacing={4} className={classes.itemView}>
      <Grid item xs={12} sm={3} md={3} lg={3}>
        <Link to={`/product/${prodId}`} className={classes.link}>{
          <img
            src={images[1]}
            width='100%'
            alt={itemName}
          ></img>
        }</Link>
      </Grid>
      <Grid item xs={12} sm={5} md={5} lg={5}>
        <Link className={classes.link} to={`/product/${prodId}`}>
          <Typography variant="subtitle2" color="secondary">
            {itemName}
          </Typography>
        </Link>
        <Rating name="product-rating" defaultValue={3.5} precision={0.5} size="small" readOnly />
        {freeShipping ? <Typography variant="body2" >Qualifies For FREE SHIPPING </Typography> : ''}
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Typography variant="h6">
          ${price}.00
          {onSale ? <Typography variant="h3" color="secondary">On Sale! </Typography> : ''}
          <Button className={classes.cartButton} onClick={(e) => addToCart(e, prodId)} >
            <ShoppingCart />
            <Typography>Add to Cart</Typography>
          </Button>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default StoreItem;
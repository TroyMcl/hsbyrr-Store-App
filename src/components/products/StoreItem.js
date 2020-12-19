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
    marginLeft: '15px',
    borderBottom: '1px solid #D3D3D3'
  },
  link: {
    textDecoration: 'none',
  },
  cartButton: {
    width: '100%',
    marginTop: '15px',
    fontSize: 10,
    backgroundColor: '#9f496e',
    '&:hover': {
      backgroundColor: '#b8547f'
    }
    // backgroundColor: '#fadd5a',
    // '&:hover': {
    //   backgroundColor: '#fae55a'
    // }
  },
  reviews: {
    marginTop: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  reviewText: {
    fontSize: 10,
    fontWeight: 'lighter'
  },
  freeShipping: {
    marginTop: '10px',
    fontSize: 10,
    fontWeight: 'lighter',
  },
});


const StoreItem = ({ product }) => {
  const { primaryImg, itemName, onSale, price, prodId, freeShipping, category, reviews } = product;
  const [shoppingCart, useShoppingCart, addToCart, adjustQty] = useContext(ShoppingCartContext)
  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.itemView}>
      <Grid item xs={12} sm={3} md={3} lg={3}>
        <Link to={`/product/${prodId}`} className={classes.link}>{
          <img
            src={primaryImg}
            width='100%'
            alt={itemName}
          ></img>
        }</Link>
      </Grid>
      <Grid item xs={12} sm={5} md={5} lg={5}>
        <Link className={classes.link} to={`/product/${prodId}`}>
          <Typography variant="subtitle2" style={{color: 'black'}} >
            {category ? category : 'Home'} - {itemName}
          </Typography>
        </Link>
        <div className={classes.reviews}>
          <Rating name="product-rating" defaultValue={3.5} precision={0.5} size="small" readOnly />
          <Typography className={classes.reviewText}>( {reviews} Reviews )</Typography>
        </div>
        {freeShipping ? <Typography variant="body2" className={classes.freeShipping} >Qualifies For FREE SHIPPING </Typography> : ''}
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Typography variant="h6">
          $ {price}.00
        </Typography>
          {onSale ? <Typography variant="h6" color="secondary" style={{ fontWeight: 'lighter' }} >On Sale! </Typography> : ''}
          <Button
            style={{color: 'white'}}
            className={classes.cartButton}
            onClick={(e) => addToCart(e, prodId)}
            startIcon={<ShoppingCart style={{ fontSize: 'small' }} />}
          >
            Add to Cart
            </Button>

      </Grid>
    </Grid>
  );
}

export default StoreItem;
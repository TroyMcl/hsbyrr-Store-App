import React, { useState, useEffect, useContext } from 'react';
import products from '../../../apis/products';
import { ShoppingCartContext } from '../../shoppingCartContext';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  Button
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Overview from './Overview';
import Reviews from './Reviews';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const ItemView = (props) => {
  const [product, setProduct] = useState({});
  const [showOverview, setShowOverview] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    products.get(`api/products/${props.match.params.id}`)
      .then(productInfo => {
        setProduct(productInfo.data.data.product);
      })
  }, [])
  const useStyles = makeStyles({
    mainImg: {
      height: '300px',
      margin: '15px'
    }
  })

  const classes = useStyles();
  const { itemName, category, reviews, price, prodId, images } = product;
  const [shoppingCart, useShoppingCart, addToCart, adjustQty] = useContext(ShoppingCartContext)
  if (product.images === undefined) return <p>loading...</p>
  return (
    <div>
      <Grid container alignItems="stretch" spacing={4}>
        <Grid item xs={12} sm={6} md={7} lg={7} >
          <Typography >{`${category} - ${itemName}`}</Typography>
          <Rating name="product-rating" defaultValue={4.5} precision={0.5} size="small" readOnly />
          <Typography>{`4.8 Stars after ${reviews} reviews`}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={5} lg={5} >
          <Typography>{`$ ${price}.00`}</Typography>
          <div>
            <Typography><LocalShippingIcon /> {`Shipping Options`}</Typography>
            <FormControlLabel control={<Checkbox name="fastShipping" />} label="1-2 Business Days $7.99" />
            <FormControlLabel control={<Checkbox name="freeShipping" />} label="3-5 Business Days FREE" />
          </div>
          <div>
            <Button className={classes.cartButton} onClick={(e) => addToCart(e, prodId)} >
              <ShoppingCart />
              <Typography>Add to Cart</Typography>
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={7} lg={7}>
          <Carousel>
            {images.map((url, i) => {
              return (
                <div key={i}>
                  <img src={url} />
                </div>
              )
            })}
          </Carousel>
        </Grid>
      </Grid>
      <div>
        <Typography variant="h3">Overview</Typography>
        {showOverview ? <ExpandMoreIcon onClick={() => setShowOverview(!showOverview)} /> : <ExpandLessIcon onClick={() => setShowOverview(!showOverview)} />}
      </div>
      {showOverview ? <Overview /> : ''}
      <div>
        <Typography variant="h3">Reviews</Typography>
        {showReviews ? <ExpandMoreIcon onClick={() => setShowReviews(!showReviews)} /> : <ExpandLessIcon onClick={() => setShowReviews(!showReviews)} />}
      </div>
      {showReviews ? <Reviews /> : ''}
    </div>
  )

}

export default ItemView;
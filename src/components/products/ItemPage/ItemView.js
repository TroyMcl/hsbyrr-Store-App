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
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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

const useStyles = makeStyles({
  mainImg: {
    height: '300px',
    margin: '15px'
  },
  reviews: {
    marginTop: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cartButton: {
    color: 'white',
    width: '100%',
    marginTop: '15px',
    fontSize: 10,
    backgroundColor: '#9f496e',
    '&:hover': {
      backgroundColor: '#b8547f'
    }
  },
  shipping: {
    marginTop: '15px',
    marginBottom: '15px',
    paddingTop: 10,
    paddingBottom: 10,
    borderTop: '1px solid #D3D3D3',
    borderBottom: '1px solid #D3D3D3'
  },
  expandableSections: {
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
    display: 'flex',
    justifyContent: "space-between",
    alignItems: 'center',
    borderBottom: '1px solid #d3d3d3'
  },
  expandedSections: {
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 5,
    padding: 10,
    color: 'white',
    backgroundColor: '#647295',
    display: 'flex',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  expandableText: {
    fontSize: 18,
  },
  expandableIcon: {
    fontSize: 18
  }
})

const ItemView = (props) => {
  const [product, setProduct] = useState({});
  const [selectedShipping, setSelectedShipping] = useState('');
  const [showOverview, setShowOverview] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    products.get(`api/products/${props.match.params.id}`)
      .then(productInfo => {
        setProduct(productInfo.data.data.product);
      })
  }, [])

  const updateShipping = (value) => {
    if (selectedShipping === value) {
      setSelectedShipping('')
    } else {
      setSelectedShipping(value)
    }
  }

  const classes = useStyles();
  const { itemName, category, reviews, price, prodId, images, description, materials, recUsage } = product;
  const [shoppingCart, useShoppingCart, addToCart, adjustQty] = useContext(ShoppingCartContext)
  if (product.images === undefined) return <p>loading...</p>
  return (
    <div>
      <Grid container alignItems="stretch" spacing={4}>
        <Grid item xs={12} sm={6} md={7} lg={7} >
          <Typography >{!category ? `Health - ${itemName}` : `${category} - ${itemName}`}</Typography>
          <div className={classes.reviews}>
            <Rating
              name="product-rating"
              defaultValue={4.5}
              precision={0.5}
              size="small"
              readOnly
            />
            <Typography>{`(4.8 Stars after ${reviews} reviews)`}</Typography>
          </div>
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
        <Grid item xs={12} sm={6} md={5} lg={5} >
          <Typography variant="h4" >{`$ ${price}.00`}</Typography>
          <div className={classes.shipping}>
            <Typography><LocalShippingIcon style={{ verticalAlign: 'middle' }} /> {`Shipping Options`}</Typography>
            <List className={classes.sideBarItem}>
              <ListItem
                role={undefined}
                name={'fastShipping'}
                dense
                button onClick={() => updateShipping('fast')}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={'fast' === selectedShipping}
                    tabIndex={-1}
                  />
                </ListItemIcon>
                <ListItemText id={'fast'} primary={'1-2 Business Days $7.99'} />
              </ListItem>
              <ListItem
                role={undefined}
                name={'freeShipping'}
                dense
                button onClick={() => updateShipping('free')}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={'free' === selectedShipping}
                    tabIndex={-1}
                  />
                </ListItemIcon>
                <ListItemText id={'free'} primary={'3-5 Business Days FREE'} />
              </ListItem>
            </List>
          </div>
          <div>
            <Button
              className={classes.cartButton}
              onClick={(e) => addToCart(e, prodId)}
              startIcon={<ShoppingCart style={{ fontSize: 'small' }} />}
            >
              Add to Cart
            </Button>
          </div>
        </Grid>
      </Grid>
      {!showOverview ?
        <div className={classes.expandableSections} onClick={() => setShowOverview(!showOverview)} >
          <Typography
            variant="h2"
            className={classes.expandableText}
          >
            Overview
          </Typography>
          <ExpandMoreIcon className={classes.expandableIcon} />
        </div> :
        <div className={classes.expandedSections} onClick={() => setShowOverview(!showOverview)} >
          <Typography
            variant="h2"
            className={classes.expandableText}
          >
            Overview
          </Typography>
          <ExpandLessIcon className={classes.expandableIcon} />
        </div>
      }
      {showOverview ? <Overview description={description} materials={materials} recUsage={recUsage} /> : ''}
      {!showReviews ?
        <div className={classes.expandableSections} onClick={() => setShowReviews(!showReviews)} >
          <Typography
            variant="h2"
            className={classes.expandableText}
          >
            Reviews
          </Typography>
          <ExpandMoreIcon className={classes.expandableIcon} />
        </div> :
        <div className={classes.expandedSections} onClick={() => setShowReviews(!showReviews)} >
          <Typography
            variant="h2"
            className={classes.expandableText}
          >
            Reviews
          </Typography>
          <ExpandLessIcon className={classes.expandableIcon} />
        </div>
      }
      {showReviews ? <Reviews reviews={reviews} /> : ''}
    </div>
  )

}

export default ItemView;
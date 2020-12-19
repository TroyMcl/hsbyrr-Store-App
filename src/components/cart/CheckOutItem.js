import React from 'react';
import { Link } from 'react-router-dom';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Rating from '@material-ui/lab/Rating';
import {
  Grid,
  Typography,
  IconButton,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    marginTop: '15px',
    marginBottom: '15px',
    paddingBottom: '15px',
    borderBottom: '1px solid #d3d3d3'
  },
  link: {
    textDecoration: 'none',
  },
  quantyField: {
    padding: '2px 6px 2px 6px',
    fontSize: '14',
    lineHeight: 1.1,
    fontWeight: 'bold'
  },
  quantyBtn: {
    margin: '5px'
  },
})

const CheckOutItem = (props) => {
  const { itemName, primaryImg, images, price, prodId, size, reviews, category } = props.product;
  const itemTotal = price * size;
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={4}
      className={classes.container}
    >
      <Grid item sm={12} s={3} md={3} lg={3}>
        <img
          alt={itemName}
          width="100%"
          src={primaryImg}
        />
      </Grid>
      <Grid item sm={12} s={5} md={5} lg={5}>
        <Link className={classes.link} to={`/product/${prodId}`}>
          <Typography
            gutterBottom
            variant="subtitle2"
            color="primary"
            style={{ fontWeight: 'lighter' }}
          >
            {category ? category : 'Home'} - {itemName}
          </Typography>
        </Link>
        <Box
          display="flex"
          alignItems="center"
        >
          <Rating name="product-rating" defaultValue={3.5} precision={0.5} size="small" readOnly />
          <Typography
            style={{ paddingLeft: '5px', fontSize: '10px', fontWeight: 'lighter' }}
          >
            {`(${reviews} ratings)`}
          </Typography>
        </Box>
        <Box
          style={{ marginTop: '7px' }}
          display="flex"
          alignItems="center"
        >
          <Typography
            color="textSecondary"
            gutterBottom
          >
            Qty:
          </Typography>
          <IconButton
            className={classes.quantyBtn}
            onClick={() => props.updateQty(prodId, 1)}
          >
            <AddIcon />
          </IconButton>
          <Typography className={classes.quantyField}>{size}</Typography>
          <IconButton
            className={classes.quantyBtn}
            onClick={() => props.updateQty(prodId, -1)}
          >
            <RemoveIcon />
          </IconButton>
        </Box>
      </Grid>
      <Grid item sm={12} s={12} md={4} lg={4}
        container
        direction='column'
        justify="space-between"
        alignItems="flex-end"
      >
          <Typography style={{ paddingRight: '5px', fontWeight: 'bold'}}>Price: $ {price}.00</Typography>
          <Box
            display="flex"
          >
            <Typography
              style={{ paddingLeft: '5px', fontWeight: 'lighter' }}
            >
              {size === 1 ? `Subtotal (${size} item):` : `Subtotal (${size} items):` }
            </Typography>
            <Typography className={classes.quantyField}>$ {itemTotal}.00</Typography>
          </Box>

      </Grid>
    </Grid>
  )
};

export default CheckOutItem;
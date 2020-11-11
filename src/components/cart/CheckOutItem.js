import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const CheckOutItem = (props) => {
  const { itemName, image, price, prodId, size } = props.product;
  const itemTotal = price * size;

  const useStyles = makeStyles({
    root: {
      width: '4ch',
      textAlign: 'center',
    }
  })
  const classes = useStyles();

  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item sm={12} s={12} md={3} lg={3}>
          <img
            alt={itemName}
            height="170"
            width="130"
            src={image[0]}
          />
        </Grid>
        <Grid item sm={12} s={12} md={4} lg={4}>
          <Typography gutterBottom>{itemName}</Typography>
          <Typography color="textSecondary" gutterBottom>{`$ ${price}.00`}</Typography>
          {/* <Link to={`/product/${prodId}`}>{<Button size="small">Info</Button>}</Link> */}
          <Link style={{textDecoration: 'none'}} to={`/product/${prodId}`}>Info</Link>
        </Grid>
        <Grid item sm={12} s={12} md={5} lg={5}>
          <CardContent>
            <Typography gutterBottom >
              Num of Items
              <IconButton onClick={() => props.updateQty(prodId, 1)}><AddIcon /></IconButton>
              <TextField
                className={classes.root}
                value={size}
                variant="filled"
                size="small"
                InputProps={{readOnly: true}}
              />
              <IconButton onClick={() => props.updateQty(prodId, -1)} ><RemoveIcon/></IconButton>
            </Typography>
              Item Price $ {itemTotal}.00
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
};

export default CheckOutItem;
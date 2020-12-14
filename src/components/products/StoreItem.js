import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ShoppingCartContext } from '../shoppingCartContext';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  link: {
    textDecoration: 'none',
  },
  card: {
    margin: '20px'
  }
});

const StoreItem = ({ product }) => {
  const { image, itemName, materials, description, price, prodId } = product;
  const [shoppingCart, useShoppingCart, addToCart, adjustQty] = useContext(ShoppingCartContext)
  const classes = useStyles();
  return (
    <Card className={classes.margin} style={{display:"flex", justifyContent: "space-between", flexDirection: "column"}}>
      <CardHeader color="secondary" title={<Link className={classes.link} to={`/product/${prodId}`}>{itemName}</Link>} subheader={`$ ${price}.00`}/>
      <CardMedia
        component="img"
        alt={itemName}
        height="170"
        src={image[0]}
        title={itemName}
      />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom noWrap={true}>
          Materials:
          <br/>
          {materials}
        </Typography>
        <Typography variant="body2" component="p">
          Description:
          <br />
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={(e) => addToCart(e, prodId)}>Add To Cart</Button>
        <Link to={`/product/${prodId}`} className={classes.link}>{<Button size="small">Info</Button>}</Link>
      </CardActions>
    </Card>
  );
}

export default StoreItem;
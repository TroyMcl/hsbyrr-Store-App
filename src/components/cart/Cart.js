import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import products from '../../apis/products';
import CheckOutItem from './CheckOutItem';
import  { Button,
          Box,
          Typography
        } from '@material-ui/core';
import { ShoppingCartContext } from '../shoppingCartContext';

const Cart = (props) => {

  const [ items, useItems ] = useState([]);
  const [ total, useTotal ] = useState(0);
  const [shoppingCart, useShoppingCart, addToCart, adjustQty] = useContext(ShoppingCartContext);

  useEffect(() => {
    const data = shoppingCart.map( async product => {
      let item = await products.get(`api/products/${product.item}`)
      item = item.data.data.product;
      item.size = product.qty;
      return item;
    })
    Promise.all(data)
      .then(data => {
        useItems(data);
        const total = data.reduce((a, item) => {
          return (item.price * item.size) + a}, 0);
        useTotal(total)
      })
  }, [])

  const updateQty = (item, change) => {
    const index = items.findIndex((itemObj => itemObj.prodId === item));
    let newTotal
    if (change < 0 && items[index].size > 0) {
      items[index].size += change;
      newTotal = total - items[index].price
      useTotal(newTotal)
    } else if (change > 0) {
      items[index].size += change;
      newTotal = total + items[index].price
      useTotal(newTotal)
    }
    // useItems([...items]);
    adjustQty(item, change)
  }

  if (items.length === 0) {
    return <div>Your Cart is Empty</div>
  }

  return (
    <div>
      {items.map(item => {
        return (
          <CheckOutItem product={item} key={item.prodId} updateQty={updateQty}/>
        )
      })}
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        <Typography
          style={{ paddingLeft: '5px', fontWeight: 'lighter', paddingRight: '5px' }}
        >
          TOTAL:
        </Typography>
        <Typography
          style={{fontWeight: 'bold', fontSize: '14'}}
        >
          $ {total}.00
        </Typography>
      </Box>
      <Box
      display="flex"
      justifyContent="flex-end"
      style={{marginTop: '15px'}}
      >
        <Link style={{textDecoration: 'none'}} to={`/checkout`}>{<Button variant="contained" color="secondary" >Checkout</Button>}</Link>
      </Box>
    </div>
  )

}

export default Cart;
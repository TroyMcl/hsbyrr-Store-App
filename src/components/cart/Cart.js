import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import products from '../../apis/products';
import CheckOutItem from './CheckOutItem';
import Button from '@material-ui/core/Button';

const Cart = (props) => {

  const [ items, useItems ] = useState([]);
  const [ total, useTotal ] = useState(0);

  useEffect(() => {
    const data = props.shoppingCart.map( async product => {
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
    props.adjustQty(item, change)
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
       <Link to={`/checkout`}>{<Button variant="contained" color="secondary" >Checkout</Button>}</Link>
    <p>$ {total}.00</p>
    </div>
  )

}

export default Cart;
import React, { useState, useEffect } from 'react';
import products from '../../apis/products';
import Pagination from 'react-pagination-js';
import "react-pagination-js/dist/styles.css";
import StoreItem from './StoreItem';

import {
  Grid,
  Checkbox,
  List,
  ListItem,
  Divider,
  makeStyles,
  Typography,
  ListItemIcon,
  ListItemText,
  FormControlLabel
} from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  sideBarItem: {
    padding: 5,
    marginTop: 5,
  }
}))

const StoreList = (props) => {
  const [productList, setProductList] = useState([]);
  const [selectedProductList, setSelectedProductList] = useState([]);
  const [paginateList, setPaginateList] = useState([]);

  const [page, setPage] = useState(1)
  const [contentSize, setContentSize] = useState(110);

  const [catagories, setCatagories] = useState([])
  const [selectedCatagory, setSelectedCatagory] = useState('Select a Category');

  const classes = useStyles();

  useEffect(() => {
    products.get('api/products')
      .then(prod => {
        prod = prod.data.data.products
        setProductList(prod);
        setSelectedProductList(prod)
        setPaginateList(prod.slice(0, 10))
        return prod;
      })
      .then(prod => {
        let holder = [];
        prod.forEach(element => {
          if (holder.indexOf(element.category) === -1) {
            holder.push(element.category)
          }
        });
        setCatagories(holder);
      })
  }, []);

  if (productList.length === 0) {
    return <div>Loading</div>
  }

  const changePage = (num) => {
    setPaginateList(selectedProductList.slice((num - 1) * 10, num * 10))
    setPage(num);
  }

  const selectACatagory = (value) => {
    let selected = value;

    if (selected === selectedCatagory) {
      setPage(1);
      setSelectedCatagory('Select a Category');
      setContentSize(productList.length);
      setSelectedProductList(productList);
      setPaginateList(productList.slice(0, 10));
      return
    }

    let holder = [];

    productList.forEach(item => {
      if (item.category === selected) {
        holder.push(item)
      }
    })

    setPage(1);
    setSelectedCatagory(value);
    setContentSize(holder.length);
    setSelectedProductList(holder);
    setPaginateList(holder.slice(0, 10));

  }

  return (
    <Grid container alignItems="stretch" spacing={4}>
      <Grid item xs={12} sm={3} md={3} lg={3} className={classes.sideBar}>
        <Divider />
        <List className={classes.sideBarItem}>
          <Typography align="left" color="primary" >{selectedCatagory}</Typography>
          {catagories.map((text, i) => {
            if (!text) return
            return (
              <ListItem key={i} role={undefined} name={text} dense button onClick={() => selectACatagory(text)}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={text === selectedCatagory}
                    tabIndex={-1}
                  />
                </ListItemIcon>
                <ListItemText id={text} primary={text} />
              </ListItem>
            )
          })
          }
        </List>
      </Grid>
      <Grid item item xs={12} sm={9} md={9} lg={9} className={classes.main}>
        {paginateList.map(product => {
          return (
            <StoreItem product={product} key={product.prodId} />
          )
        })}
      </Grid>
      <Pagination
        totalSize={contentSize}
        currentPage={page}
        changeCurrentPage={changePage}
        numberOfPagesNextToActivePage={2}
      />
    </Grid>
  )

}

export default StoreList;
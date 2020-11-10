import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton'
import { AppBar, Toolbar, Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  font: {
    color: '#ffffff',
    textDecoration: 'none'
  },

  appBar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" style={{marginBottom: '20px'}}>
      <Toolbar className={classes.appBar}>
        <Link to="/" className="item">
        <Button className={classes.font}>Store</Button>
        </Link>
        <Link to="/cart" className="item">
          <IconButton edge="start" className={classes.font}>
            <ShoppingCartIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  )
};

{/* <Toolbar className="classes.headerStyles">
  <Grid container>
    <Link className="classes.font" to="/" className="item">
      Store
    </Link>
    <Grid item md={10} />
    <Link to="/cart" className="item">
      <ShoppingCartIcon />
    </Link>
  </Grid>
</Toolbar> */}
export default Header;
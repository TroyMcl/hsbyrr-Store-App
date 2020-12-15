import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton'
import { AppBar, Toolbar, Button } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search'
import { fade, makeStyles } from '@material-ui/core/styles';
import theme from '../theme';

const useStyles = makeStyles({
  font: {
    color: '#ffffff',
    margin: '10px',
    fontSize: '18px'
  },
  appBar: {
    display: 'flex',
    justifyContent: 'space-between',
    // paddingLeft: '100px',
    paddingRight: '100px',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
})

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ marginBottom: '20px', background: 'linear-gradient(to right bottom, #9c27b0, #d05ce3)' }}>
      <Toolbar className={classes.appBar}>
        <div className={classes.search}>
          <div className={classes.searchIcon} >
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search.."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
          />
        </div>
        <div>
          <Link to="/" className="item" style={{ textDecoration: 'none' }}>
            <Button className={classes.font}>Store</Button>
          </Link>
          <Link to="/cart" className="item">
            <IconButton edge="start" className={classes.font}>
              <ShoppingCartIcon />
            </IconButton>
          </Link>
        </div>
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
// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// const NavBar = () => {
//   return (
//     <div>
//       <AppBar position="fixed">
//         <Toolbar>
//           <Typography variant="title" color="inherit">
//             <h2>Area that will have search and cart btn</h2>
//           </Typography>
//           <Button
//           edge="end"
//           variant='contained'
//           color='secondary'
//           className='shoppinCartBtn'
//           startIcon={<ShoppingCartIcon />}
//         >
//           Cart
//         </Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   )
// }

// export default NavBar

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button
            edge="end"
            variant='contained'
            color='secondary'
            className='shoppinCartBtn'
            startIcon={<ShoppingCartIcon />}
          >
          Cart
        </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
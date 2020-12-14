import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

const Review = ({ items, stateObj }) => {
  const { firstName, lastName, address1, address2, city, state, zipCode, cardName, cardNumber, expDate, cvv } = stateObj
  const classes = useStyles();

  const getTotal = () => {
    return items.reduce((a, item) => {return (item.size * item.price) + a}, 0)
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {items.map((item) => (
          <ListItem className={classes.listItem} key={item.prodId}>
            <ListItemText primary={item.itemName} secondary={item.size} />
            <Typography variant="body2">{`$ ${(item.price * item.size)}.00`}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${getTotal()}.00
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{firstName + ' ' + lastName}</Typography>
          <Typography gutterBottom>
          {`${address1}, ${address2}`}
          <br />
          {`${city}, ${state}, ${zipCode}`}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Card holder</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{cardName}</Typography>
            </Grid>
            <Grid item xs ={6}>
              <Typography gutterBottom>Card Number</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{cardNumber}</Typography>
            </Grid>
            <Grid item xs ={6}>
              <Typography gutterBottom>Exp Date</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{expDate}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Review;
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const PaymentForm = (props) => {
  const { cardName, cardNumber, expDate, cvv} = props;
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            name="cardName"
            label="Name on card"
            value={cardName}
            onChange={(e) => props.updateInput(e)}
            fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Card number"
            value={cardNumber}
            onChange={(e) => props.updateInput(e)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            name="expDate"
            label="Expiry date"
            value={expDate}
            onChange={(e) => props.updateInput(e)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            value={cvv}
            onChange={(e) => props.updateInput(e)}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
}

export default PaymentForm;
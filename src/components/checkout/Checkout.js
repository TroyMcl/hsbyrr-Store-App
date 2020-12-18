import React, { useReducer, useState, useEffect, useContext } from 'react';
import { ShoppingCartContext } from '../shoppingCartContext';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

import products from '../../apis/products';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));


const Checkout = (props) => {
  const classes = useStyles();
  const steps = ['Shipping address', 'Payment details', 'Review your order'];
  const [shoppingCart, useShoppingCart, addToCart, adjustQty] = useContext(ShoppingCartContext);

  const [ items, setItems ] = useState([]);
  const [ activeStep, setActiveStep ] = useState(0);
  const [ filterInput, setFilterInput ] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      cardName: '',
      cardNumber: '',
      expDate: '',
      cvv: ''
    })

  useEffect(() => {
    const data = shoppingCart.map( async product => {
      let item = await products.get(`api/products/${product.item}`)
      item = item.data.data.product;
      item.size = product.qty;
      return item;
    })
    Promise.all(data)
      .then(data => {
        setItems(data);
      })
  }, [])

  const updateInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilterInput({[name]: value})
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm
                updateInput={updateInput}
              />;
      case 1:
        return <PaymentForm
                updateInput={updateInput}
              />;
      case 2:
        return <Review items={items} stateObj={filterInput}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = () => {
    setActiveStep(activeStep + 1);
    useShoppingCart([])
  }

  return (
    <div>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label} color="secondary">
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  {activeStep === steps.length -1 ?
                    <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit}
                    className={classes.button}
                  >
                    Place order
                  </Button> :
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
                  }
                </div>
              </>
            )}
          </>
        </Paper>
      </main>
    </div>
  );
}

export default Checkout;
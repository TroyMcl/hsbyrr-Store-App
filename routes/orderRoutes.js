const express = require('express');
const { saveOrder, getOrderById } = require('../controllers/orderControllers');
const router = express.Router();

router
  .route('/')
  .post(saveOrder);

router
  .route('/:id')
  .get(getOrderById);

module.exports = router;
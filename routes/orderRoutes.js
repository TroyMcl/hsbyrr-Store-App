const express = require('express');
const { saveOrder, getOrderById, editOrderById } = require('../controllers/orderControllers');
const router = express.Router();

router
  .route('/')
  .post(saveOrder);

router
  .route('/:id')
  .get(getOrderById)
  .patch(editOrderById);

module.exports = router;
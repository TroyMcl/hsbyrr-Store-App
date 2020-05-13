const express = require('express');
const { saveOrder } = require('../controllers/orderControllers');
const router = express.Router();

router
  .route('/')
  .post(saveOrder)

// router
//   .route('/:id')
//   .get('get order by id')

module.exports = router;
const express = require('express');
const { getNumberOfReviews } = require('../controllers/reviewControllers');
const router = express.Router();

router
  .route('/:num')
  .get(getNumberOfReviews)

module.exports = router
const express = require('express');
const { getAllPorducts } = require('../controllers/prodControllers');
const router = express.Router();

router
  .route('/')
  .get(getAllPorducts)

// router
//   .route('/:id')
//   .get('get prod by id')

  module.exports = router;
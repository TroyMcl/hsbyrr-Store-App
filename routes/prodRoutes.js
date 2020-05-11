const express = require('express');
const { getAllPorducts, getProductById } = require('../controllers/prodControllers');
const router = express.Router();

router
  .route('/')
  .get(getAllPorducts)

router
  .route('/:id')
  .get(getProductById)

  module.exports = router;
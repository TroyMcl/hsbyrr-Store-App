const express = require('express');
const { getAllPorducts, getProductById, addProduct } = require('../controllers/prodControllers');
const router = express.Router();

router
  .route('/')
  .get(getAllPorducts);

router
  .route('/:id')
  .get(getProductById);

// editing routes
router
  .route('/edit')
  .post(addProduct);

module.exports = router;
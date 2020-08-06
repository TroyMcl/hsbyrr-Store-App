const express = require('express');
const { getAllPorducts, getProductById, addProduct, deleteProduct, updateProduct } = require('../controllers/prodControllers');
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

router
  .route('/edit/:id')
  .delete(deleteProduct)
  .patch(updateProduct);

module.exports = router;
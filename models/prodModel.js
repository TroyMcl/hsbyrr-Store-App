const mongoose = require('mongoose');

const prodSchema = new mongoose.Schema({
  image: {
    type: [String],
    required: true,
  },
  itemName: {
    type: String,
    unique: true,
  },
  size: String,
  price: {
    type: Number,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  materials: {
    type: String,
  },
  description: {
    type: String,
  },
  shippingCost: {
    type: Number,
  },
  prodId: {
    type: String,
  },
  onSale: {
    type: Boolean,
    default: false,
  },
});

const Products = mongoose.model('Products', prodSchema);

module.exports = Products;
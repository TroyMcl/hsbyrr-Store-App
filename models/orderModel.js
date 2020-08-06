const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: {
    type: String,
  },
  streetAddress: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zipCode: {
    type: Number,
  },
  email: {
    type: String,
  },
  orderDate: {
    type: Date,
    default: Date.now()
  },
  items: {
    type: [String],
  },
  orderId: {
    type: String
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
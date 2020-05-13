const Order = require('../models/orderModel');

exports.saveOrder = async (req, res) => {
  try {
    let newOrder = await Order.create(req.body);
    res.status(201).json({
      message: 'order completed',
      data: newOrder,
    })
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err,
    })

  }



};
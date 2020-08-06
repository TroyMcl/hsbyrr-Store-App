const Order = require('../models/orderModel');

exports.saveOrder = async (req, res) => {
  try {
    let newOrder = await Order.create(req.body);
    res.status(201).json({
      message: 'order completed',
      data: newOrder,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err,
    });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    let order =  await Order.findOne({ orderId: req.params.id });
    res.status(200).json({
      status: 'success',
      data: {
        order
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err,
    });
  }
};

exports.editOrderById = async (req, res) => {
  let orderUpdate = req.body;
  try {
    const order = await Order.findOneAndUpdate({ orderId:req.params.id }, orderUpdate, { new: true });
    res.status(201).json({
      status: 'success',
      data: {
        order
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err,
    });
  }
};
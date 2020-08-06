const Prod = require('../models/prodModel');

exports.getAllPorducts = async (req, res) => {
  try {
    let products = await Prod.find();
    res.status(200).json({
      status: 'success',
      data: {
        products,
      }
    })
  } catch (err) {
    res.status(400).json({
      status: 'failure',
      message: err,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Prod.findOne({prodId: req.params.id});
    res.status(200).json({
      status: 'success',
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failure',
      message: err,
    });
  }
};

exports.addProduct = async (req, res) => {
  let productInfo = req.body
  try {
    const product = await Prod.updateOne({ prodId: productInfo.prodId }, productInfo, { upsert: true });
    res.status(201).json({
      status: 'success',
      data: {
        product
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err
    });
  }
};
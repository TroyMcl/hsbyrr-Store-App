const Prod = require('../models/prodModel');

exports.getAllPorducts = async (req, res) => {
  try {
    let products = await Prod.find();
    console.log(products)
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
  console.log('hitting route?')
  try {
    const product = await Prod.findOne({prodId: req.params.id});
    console.log(product)
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
const Prod = require('../models/prodModel');

exports.getAllPorducts = async (req, res) => {
  try {
    let products = await Prod.find();
    console.log(products)
    res.status(200).json({
      status: 'success',
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failure',
      message: err,
    });
  }
};

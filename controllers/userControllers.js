const User = require('../models/orderModel');

exports.getUserByName = async (req, res) => {
  let userName = req.body;
  try {
    let user = await User.findOne({nameFirst: userName.nameFirst , nameLast: userName.nameLast })
    res.status(200).json({
      status: 'success',
      data: {
        user
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failure',
      message: err
    });
  }
};

exports.addUser = async (req, res) => {
  let user = req.body;
  console.log(req.body)
  try {
    let newUser = await User.create(user);
    res.status(200).json({
      status: 'sucess',
      data: {
        newUser
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'failure',
      message: err
    });
  }
};
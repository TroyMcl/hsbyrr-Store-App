const User = require('../models/userModel');

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

exports.editUser = async (req, res) => {
  let userName = req.body;
  try {
    let user = await User.findOneAndUpdate({nameFirst: userName.nameFirst , nameLast: userName.nameLast }, userName, { new: true })
    res.status(201).json({
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
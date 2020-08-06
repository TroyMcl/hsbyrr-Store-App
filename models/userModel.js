const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nameFirst: {
    type: String,
  },
  nameLast: {
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
  userName: {
    type: String,
  },
  orders: {
    type: [String]
  }
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
const express = require('express');
const { getUserByName, addUser } = require('../controllers/userControllers');
const router = express.Router();


router
  .route('/')
  .get(getUserByName)
  .post(addUser);

module.exports = router;
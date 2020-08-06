const express = require('express');
const { getUserByName, addUser, editUser } = require('../controllers/userControllers');
const router = express.Router();


router
  .route('/')
  .get(getUserByName)
  .post(addUser);

router
  .route('/edit')
  .patch(editUser);

module.exports = router;
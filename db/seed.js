const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Products = require('../models/prodModel');
const { prodList } = require('./prodData');
dotenv.config({ path: './config.env'});

const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection Successful'))

  const seedProducts = async () => {
    try {
      const saved = await Products.insertMany(prodList);
      console.log('Initial Products loaded', saved);
      process.exit();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProductsLibrary = async () => {
    try {
      await Products.deleteMany();
      console.log('Product Library cleared');
    } catch (err) {
      console.log(err);
    }
  };

  if (process.argv[2] === '--delete') {
    deleteProductsLibrary();
  } else if (process.argv[2] === '--seed') {
    seedProducts();
  }
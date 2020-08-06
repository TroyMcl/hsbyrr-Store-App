const express = require('express');
const prodRoutes = require('./routes/prodRoutes');
const orderRoutes = require('./routes/orderRoutes');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use('/products', prodRoutes);
app.use('/orders', orderRoutes);

app.get('*', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'the server is working'
  });
  // res.sendFile(path.join(__dirname + '/public/index.html'))
});

module.exports = app;
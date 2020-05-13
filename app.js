const express = require('express');
const prodRoutes = require('./routes/prodRoutes');
const orderRoutes = require('./routes/orderRoutes');
const app = express();

app.use(express.json());
app.use(express.static('public'))

app.use('/products', prodRoutes);
app.use('/orders', orderRoutes);

app.get('*', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'the server is working'
  })
})

module.exports = app;
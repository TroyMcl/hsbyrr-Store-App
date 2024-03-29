const express = require('express');
const prodRoutes = require('./routes/prodRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewsRoutes = require('./routes/reviewsRoutes')
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use('/product/:resource', (req, res) => {
  const resource = req.params.resource !== 'bundle.js' ? 'index.html' : 'bundle.js'
  res.sendFile(path.join(__dirname, 'public', resource))
})

app.use('/api/products', prodRoutes);
app.use('/orders', orderRoutes);
app.use('/users', userRoutes);
app.use('/reviews', reviewsRoutes)

app.get('*', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'the server is working'
  });
  // res.sendFile(path.join(__dirname + '/public/index.html'))
});

module.exports = app;
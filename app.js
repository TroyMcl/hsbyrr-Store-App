const express = require('express');
const prodRoutes = require('./routes/prodRoutes');
const app = express();

app.use(express.json());
app.use(express.static('public'))

app.use('/products', prodRoutes);

app.get('*', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'the server is working'
  })
})

module.exports = app;
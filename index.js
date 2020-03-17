const express = require('express');
const app = express();
const port = 3000;
const db = require('./db/index.js')

app.use(express.static('public'))

app.get('/products', (req,res) => {
  console.log('request hit server')
  db.getProducts(function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

app.listen(port, () => console.log(`Server listening on ${port}`))
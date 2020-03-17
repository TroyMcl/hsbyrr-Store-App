const environment = process.env.ENVIRONMENT || 'development';
const config = require('./knexfile.js')[environment];
const knex = require('knex')(config);


const getProducts = (callback) => {
  const products = [];
  knex.from('products').select('*')
    .then((products) => {
      console.log(products)
      callback(null, products)
    })
    .catch((err) => {
      callback(err)
    })
}
// module.exports = requrie('knex')(config)

module.exports = {
  getProducts,
}
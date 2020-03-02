const environment = process.env.ENVIRONMENT || 'development';
const config = require('./knexfile.js/index.js')[environment];
module.exports = requrie('knex')(config)
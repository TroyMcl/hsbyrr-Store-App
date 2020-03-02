
exports.up = function(knex) {
  return knex.schema.createTable('products', table => {
    table.increments('id');
    table.string('img-small');
    table.string('img-large');
    table.string('description');
    table.integer('price');
    table.boolean('stock');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products')
};


exports.up = function(knex) {
  return knex.schema.createTable('products', table => {
    table.increments('id');
    table.string('imgSmall');
    table.string('imgLarge');
    table.string('itemName');
    table.integer('price');
    table.integer('numInstock');
    table.string('materials');
    table.text('description');
    table.string('shippingCost');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products')
};

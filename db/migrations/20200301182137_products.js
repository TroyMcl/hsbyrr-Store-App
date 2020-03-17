
exports.up = function(knex) {
  return knex.schema.createTable('products', table => {
    table.increments('id');
    table.string('imgSmall');
    table.string('imgLarge');
    table.string('itemName');
    table.integer('price');
    table.boolean('inStock');
    table.string('materials');
    table.text('description');
    table.string('shippingCost');
    table.string('productId');
    table.boolean('onSale');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products')
};

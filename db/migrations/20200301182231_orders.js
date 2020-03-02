
exports.up = function(knex) {
  knex.schema.createTable('orders', table => {
    table.increments('id');
    table.timestamp('order-time');
    table.integer('products')
    table.integer('user-id').unsigned()
    table.foreign('user-id').references('id').inTable('users')
    onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('orders')
};

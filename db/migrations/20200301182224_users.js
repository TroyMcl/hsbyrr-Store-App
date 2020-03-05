
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('fname');
    table.string('lname');
    table.string('address');
    table.string('email');
    table.integer('phone');
  })
};

exports.down = function(knex) {
  return knex.dropTable('users')
};

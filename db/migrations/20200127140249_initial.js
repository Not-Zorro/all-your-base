exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary();
    table.string('api_key');
    table.timestamps(true, true);
  })
  .createTable('favorites', function(table) {
    table.increments('id').primary();
    table.string('location');
    table.integer('user_id').unsigned().references('id').inTable('users');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('favorites').dropTable('users')
};

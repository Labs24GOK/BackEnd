

exports.up = function (knex) {
  return knex.schema
      .createTable('test', table => {
          table.increments();
          table.text('name').notNullable().unique();
      })

};

exports.down = function (knex) {
  return knex.schema
      .dropTable('test')
};
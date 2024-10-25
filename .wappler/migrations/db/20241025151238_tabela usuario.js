
exports.up = function(knex) {
  return knex.schema
    .createTable('usuarios', async function (table) {
      table.increments('id');
      table.string('nome-completo');
      table.string('email');
      table.text('senha');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('usuarios')
};

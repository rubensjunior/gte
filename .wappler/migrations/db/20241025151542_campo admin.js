
exports.up = function(knex) {
  return knex.schema
    .table('usuarios', async function (table) {
      table.boolean('admin').defaultTo(0);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('usuarios', async function (table) {
      table.dropColumn('admin');
    })
};

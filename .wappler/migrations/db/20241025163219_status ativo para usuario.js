
exports.up = function(knex) {
  return knex.schema
    .table('usuarios', async function (table) {
      table.boolean('ativo').defaultTo(1);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('usuarios', async function (table) {
      table.dropColumn('ativo');
    })
};

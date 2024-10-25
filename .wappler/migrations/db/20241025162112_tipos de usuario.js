
exports.up = function(knex) {
  return knex.schema
    .table('usuarios', async function (table) {
      table.boolean('colaborador').defaultTo(0);
      table.boolean('frequentador').defaultTo(0);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('usuarios', async function (table) {
      table.dropColumn('colaborador');
      table.dropColumn('frequentador');
    })
};

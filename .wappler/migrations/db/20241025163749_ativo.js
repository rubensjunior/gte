
exports.up = function(knex) {
  return knex.schema
    .table('usuarios', async function (table) {
      table.boolean('ativo').defaultTo(0).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('usuarios', async function (table) {
      table.boolean('ativo').defaultTo('1').alter();
    })
};

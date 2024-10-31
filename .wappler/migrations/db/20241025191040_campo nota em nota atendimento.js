
exports.up = function(knex) {
  return knex.schema
    .table('notasAtendimentos', async function (table) {
      table.text('nota');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('notasAtendimentos', async function (table) {
      table.dropColumn('nota');
    })
};

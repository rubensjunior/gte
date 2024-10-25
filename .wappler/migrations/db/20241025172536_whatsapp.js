
exports.up = function(knex) {
  return knex.schema
    .table('usuarios', async function (table) {
      table.string('whatsapp');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('usuarios', async function (table) {
      table.dropColumn('whatsapp');
    })
};

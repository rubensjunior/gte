
exports.up = function(knex) {
  return knex.schema
    .createTable('notasAtendimentos', async function (table) {
      table.increments('id');
      table.integer('atendimento').unsigned();
      table.foreign('atendimento').references('id').inTable('atendimentos').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('criado-por').unsigned();
      table.foreign('criado-por').references('id').inTable('usuarios').onUpdate('CASCADE').onDelete('CASCADE');
      table.datetime('criado-em');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('notasAtendimentos')
};


exports.up = function(knex) {
  return knex.schema
    .createTable('atendimentos', async function (table) {
      table.increments('id');
      table.integer('frequentador').unsigned();
      table.foreign('frequentador').references('id').inTable('usuarios').onUpdate('CASCADE').onDelete('CASCADE');
      table.date('criado-em');
      table.integer('criado-por').unsigned();
      table.foreign('criado-por').references('id').inTable('usuarios').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('atendimentos')
};

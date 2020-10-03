module.exports.up = async function(knex){
    return knex.schema.createTable('professor', table =>{
        table.increments('idProfessor').primary();
        table.string('nomeProfessor').notNullable();
        table.string('emailProfessor').notNullable();
    });
}

module.exports.down = async function(knex){
    return knex.schema.dropTable('professor');
}
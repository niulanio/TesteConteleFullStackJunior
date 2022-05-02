/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema.createTable('users', function(table){
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.text('email').unique().notNullable();
        table.text('password').notNullable();
  
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    
      return knex.schema.dropTable('users');
      
  
  };
  
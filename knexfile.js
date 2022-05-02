// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

console.log(process.env.DB_HOST)
console.log(process.env.DB_CLIENT)
console.log(process.env.DB_DATABASE)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)

module.exports = {

  development: {
    client: process.env.DB_CLIENT || 'pg',
    connection: {
      host: process.env.DB_HOST || "localhost",
      database: process.env.POSTGRES_DB || "TestDeveloperFullStackContele",
      user: process.env.POSTGRES_USER || "postgres",
      password: process.env.POSTGRES_PASSWORD || "123",
      port: 5433
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './migrations'
    }
  },
};

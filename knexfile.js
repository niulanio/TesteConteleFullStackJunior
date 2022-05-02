// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: process.env.DB_CLIENT || 'pg',
    connection: {
      host: process.env.DB_HOST || "localhost",
      database: process.env.DB_DATABASE || "TestDeveloperFullStackContele",
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "123"
    }
  },
};

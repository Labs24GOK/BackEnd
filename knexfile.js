// Update with your config settings.
require('dotenv').config();

const database_name = process.env.DB_NAME;
const database_user = process.env.DB_USER;
const database_password = process.env.DB_PASSWORD;

module.exports = {
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },
  development: {
    client: 'postgresql',
    connection: {
      database: database_name,
      user: database_user,
      password: database_password
    },
    seeds: {
      directory: './database/seeds'
    },
    migrations: {
      directory: './database/migrations'
    }
  }
};

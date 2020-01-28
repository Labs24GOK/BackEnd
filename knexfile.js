// Update with your config settings.
require('dotenv').config();

const database_name = process.env.DB_NAME;
const database_user = process.env.DB_USER;
const database_password = process.env.DB_PASSWORD;

module.exports = {
  production: {
    client: 'postgresql',
    connection: {
      port: process.env.DB_PORT,
      host: 'speakoutawsdev.cdnyzw3hdv8h.us-east-2.rds.amazonaws.com',
      database: process.env.DB_DB || 'postgres',
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },
  development: {
    client: 'pg',
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

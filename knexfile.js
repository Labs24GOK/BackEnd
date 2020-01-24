// Update with your config settings.
require('dotenv').config();

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

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  development: {
    client: 'pg',
    connection: {
      database: 'speakout',
      user: 'postgres',
      password: process.env.DATABASE_PASSWORD
    },
    seeds: {
      directory: "./database/seeds"
    },
    migrations: {
      directory: "./database/migrations"
    }
  }
};

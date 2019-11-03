// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
  // production: {
  //   client: "postgresql",
  //   connection: {
  //     port: process.env.DB_PORT,
  //     host: "speakoutawsdev.cdnyzw3hdv8h.us-east-2.rds.amazonaws.com",
  //     database: process.env.DB_DB || "postgres",
  //     user: process.env.DB_USER,
  //     password: process.env.DB_PASS
  //   },
  //   migrations: {
  //     directory: './database/migrations'
  //   },
  //   seeds: {
  //     directory: './database/seeds'
  //   }
  // }
};

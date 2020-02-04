const environment = process.env.DB_ENV || 'development'; //change back to .NODE_ENV when not testing, change to DB_ENV when testing

const knex = require('knex');

const knexConfig = require('../knexfile.js')[environment];

module.exports = knex(knexConfig);
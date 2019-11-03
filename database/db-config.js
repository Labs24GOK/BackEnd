const environment = process.env.NODE_ENV || 'development';

const knex = require('knex');

const knexConfig = require('../knexfile.js');

module.exports = knex(knexConfig.development);
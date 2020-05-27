const knex = require('knex')('production');

const knexConfig = require('../knexfile.js');

module.exports = knex(knexConfig.development);

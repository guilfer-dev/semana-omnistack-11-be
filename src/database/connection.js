const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.github_pages);

module.exports = connection;

const knex = require('knex');

const config = require('../knexfile.js');

// // we must select the development object from our knexfile
// const db = knex(config.development);

// // export for use in codebase
// module.exports = db;

const dbEnv = process.env.DB_ENV || "development";
const configObj = config[dbEnv];

module.exports = knex(configObj);
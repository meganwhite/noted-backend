// Update with your config settings.
// heroku will add the DATABASE_URL environment variable
// during development it would connect to your local postgres installation
const productionConnection = process.env.DATABASE_URL || "postgres://vkxhpkyuxgyvie:0557ae5a3bd67114eb6cfc9b8b9704b0409100e70de725ef07e02b3e9af6ea49@ec2-174-129-18-42.compute-1.amazonaws.com:5432/dbbq097ldefp5i"

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/database_notes.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  },
  
  production: {
    client: "pg", // need to npm i pg
    connection: productionConnection,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      min: 2,
      max: 100 // this is to ensure the migration will not time out
    }
  }

};

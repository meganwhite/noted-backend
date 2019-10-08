// Update with your config settings.
// heroku will add the DATABASE_URL environment variable
// during development it would connect to your local postgres installation

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
    connection: process.env.DATABASE_URL,
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

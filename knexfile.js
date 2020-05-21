
module.exports = {
    development: {
      client: 'sqlite3',
      connection: { filename: './data/pintereach.db3' },
      migrations: {
        directory: './data/migrations',
        tableName: 'dbmigrations'
      },
      seeds: { directory: './data/seeds' },
      useNullAsDefault: true 
    },
    testing: {
      client: 'sqlite3',
      connection: {
        filename: './data/test.db3'
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations',
        tableName: 'dbmigrations'
      },
      seeds: {
        directory: './data/seeds'
      }
    },
    production: {
      client: 'sqlite3',
      connection: { filename: './data/pintereach.db3' },
      migrations: {
        directory: './data/migrations',
        tableName: 'dbmigrations'
      },
      seeds: { directory: './data/seeds' },
      useNullAsDefault: true
    }
  };
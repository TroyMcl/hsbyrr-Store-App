// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: null,
      database: 'scents',
      port: 3306,
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: null,
      database: 'scents',
      port: 3306,
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user:     'save in git ignore file',
      password: 'save in gitignore file',
      database: 'save in get ignore file',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

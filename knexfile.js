// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/sweater_weather_dev',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/sweater_weather_test',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
    connection: 'postgres://cbqgyrqzppbwep:661597d33909d6c766b470fc8f31c489da856a06c787d1472c6e7b05586cf83f@ec2-174-129-253-62.compute-1.amazonaws.com:5432/d3t2ai19amlauq',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/prod'
    },
    useNullAsDefault: true
  }
};

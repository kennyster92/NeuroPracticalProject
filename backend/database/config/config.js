require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: 1234,
    database: 'neuro_project_db',
    host: '127.0.0.1',
    dialect: 'mysql',
    use_env_variable: 'DEV_DATABASE_URL',
  },
  test: {
    username: 'root',
    password: 1234,
    database: 'neuro_project_db',
    host: '127.0.0.1',
    dialect: 'mysql',
    use_env_variable: 'TEST_DATABASE_URL',
  },
  production: {
    username: 'root',
    password: 1234,
    database: 'neuro_project_db',
    host: '127.0.0.1',
    dialect: 'mysql',
    use_env_variable: 'DATABASE_URL',
  }
};

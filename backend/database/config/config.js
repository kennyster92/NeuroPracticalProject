require('dotenv').config();

// process.env.DATABASE_USERNAME

module.exports = {
  development: {
    username: 'kevinceni', //process.env.DB_USERNAME,
    password: '12345678', // process.env.DB_PASSWORD,
    database: 'neuro_project_db', // process.env.DB_NAME,
    host: '127.0.0.1',
    port: '3307',
    dialect: 'mysql',
    //use_env_variable: 'jdbc:mysql://127.0.0.1:3306/neuro_project_db', //'DEV_DATABASE_URL',
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    dialect: 'mysql',
    use_env_variable: 'TEST_DATABASE_URL',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    dialect: 'mysql',
    use_env_variable: 'DATABASE_URL',
  }
};

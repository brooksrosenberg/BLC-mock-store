const Sequelize = require('sequelize');

// Create a connection object
require('dotenv').config();

// create connection to our heroku db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, 
  {
    // Database location
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  },
  
);

module.exports = sequelize;



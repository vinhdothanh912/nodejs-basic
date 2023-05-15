require("dotenv").config();
const mysql = require("mysql2/promise");

// create the connection
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
// });

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,

  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = connection;

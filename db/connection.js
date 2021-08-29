// connection to the database
const util = require("util");
const mysql = require("mysql2");

require("dotenv").config();

// create connection to our db
let connection = mysql.createConnection(
    
    {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PW,
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
);

connection.query = util.promisify(connection.query);



module.exports = connection;
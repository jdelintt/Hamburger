// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  // Database is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "umfspx2r92u2qkz4",
    password: "a7blh59xlfey8m59",
    database: "yj0f7aypky5rwgua",
  });
}

// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;

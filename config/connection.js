// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "d1kb8x1fu8rhcnej.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "umfspx2r92u2qkz4",
  password: "a7blh59xlfey8m59",
  database: "yj0f7aypky5rwgua",
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

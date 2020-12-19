const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Tiara1997!',
    database: 'burgers_db'
  });
}
connection.connect();
module.exports = connection;
const mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tiara1997!',
    database: 'osi3b2jl42quqi9t'
  });
}
connection.connect();
module.exports = connection;
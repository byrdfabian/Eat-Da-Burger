const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tiara1997!',
    database: 'fierce-dawn-20862'
  });
}
connection.connect();
module.exports = connection;
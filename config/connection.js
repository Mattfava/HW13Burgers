var mysql = require("mysql");

if(process.env.JAWSDB_URL){
  var connection = mysql.createConnection(process.env.JAWSDB_URL)
}else{
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootpass",
  database: "burgers_db"
});
}
module.exports = connection;
var mysql = require('mysql'); // npm install mysql
var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodejs"
      });
con.connect(function(err) {
if (err) throw err;

});
module.exports = con;
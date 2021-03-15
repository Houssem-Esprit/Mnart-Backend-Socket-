var mysql = require('mysql');

var con = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "mnart"
});




module.exports = con;
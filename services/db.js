const mysql = require('mysql');
const config = require('../config');

let connection = mysql.createConnection({
    host: config.db.host, // Replace with your host name
    user: config.db.user,      // Replace with your database username
    password: config.db.password,      // Replace with your database password
    database: config.db.database // // Replace with your database Name
});

connection.connect(function(err) {
    try{
        console.log('Database is connected successfully !');
    } catch (err) {
        throw err;
    }
});

module.exports = connection;
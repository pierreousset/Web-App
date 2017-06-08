const mysql = require('mysql');

var connection = mysql.createConnection({
host: 'ip',
port: 'port',
user: 'test',
password: 'azerty',
database: 'laravel'
});


exports.connection = connection;


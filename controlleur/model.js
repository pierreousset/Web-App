const util = require('util');
var bdd = require('./mysql');

function view() {
	bdd.connection.connect(function(err){
		bdd.connection.query("SELECT * FROM task", function(err, rows, fields){
			var rows = rows;
			exports.rows = rows;
			console.log(util.inspect(rows));
			console.log('Task displayed');
		});
	});
}

exports.view = view;
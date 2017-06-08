var bdd = require('./mysql');

bdd.connection.connect(function(err){
        bdd.connection.query("CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, login VARCHAR(255), password VARCHAR(255))");
        console.log('Table user created');
        bdd.connection.query("CREATE TABLE task (id INT AUTO_INCREMENT PRIMARY KEY, tache VARCHAR(255), status INT DEFAULT 0)");
        console.log('Table task created');
        process.exit(0);
});
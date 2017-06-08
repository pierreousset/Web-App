var express = require('express');
var router = express.Router();
const util = require('util');
var bdd = require('../controlleur/mysql');
var mod = require('../controlleur/model');



/* GET home page. */
router.get('/', function(req, res, next) {
    bdd.connection.connect(function(err){
        bdd.connection.query("SELECT * FROM task", function(err, rows, fields){
            console.log(util.inspect(rows));
            res.render('home/index', { title: 'AppWeb', tasks:rows });
            console.log('Task displayed');
        });
    });
    
});

router.post('/remove/:id', function(req, res, next) {
    if (req.params.id != "") {
        bdd.connection.query("DELETE FROM task WHERE id='"+req.params.id+"'", function(err, rows, fields){
            res.redirect('/');
        });
    }
});

router.get('/parametre', function(req, res, next) {
    res.render('para/index', { title: 'AppWeb', titlepara: "AppWeb - para" });
});

router.get('/aujourd_hui', function(req, res, next) {
    res.render('aujourd/index.ejs', { title: 'AppWeb', titlepara: "AppWeb - aujourd-hui" });
});

router.post('/incription', function(req, res, next) {
    var user = req.body.emailincription;
    var password = req.body.password;
    console.log(user);
    email = "pierre@ynov.com";

    bdd.connection.connect(function(err) {
        bdd.connection.query("INSERT INTO customers SET user='" + user + "', password='" + password + "'");
        console.log('Inscription fait');
    });
    res.redirect('/');
});


router.post('/connexion', function(req, res, next) {
    var user = req.body.email;
    var password = req.body.password;
    email = "pierre@ynov.com";

    bdd.connection.connect(function(err) {
        bdd.connection.query("SELECT INTO customers SET user='" + user + "', password='" + password + "'");
        console.log('Inscription fait');
    });
    res.redirect('/');
});

router.post('/add', function(req, res, next) {
    tache = req.body.tache;
    status = false;

    bdd.connection.connect(function(err) {
        bdd.connection.query("INSERT INTO task SET tache='" + tache + "', status='" + status + "'");
        console.log('Add tache fait');
    });
    res.redirect('/');
});

module.exports = router;
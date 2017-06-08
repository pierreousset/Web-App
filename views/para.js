var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/parametre', function(req, res, next) {
    res.render('para/index', { title: 'AppWeb', titlepara: "AppWeb - para" });
});

module.exports = router;
var express = require('express');
var router = express.Router();
var dbfile = require('../dbcionfig.js');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', function(req, res, next) {
    users.create(req.body,function(err, result) {
        if (err) {
            console.log("err", err);
            res.send(err)
        }
        res.send(result);

    })
});*/
module.exports = router;
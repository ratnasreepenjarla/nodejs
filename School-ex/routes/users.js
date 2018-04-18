var express = require('express');
var router = express.Router();
var users = require('../models/users')

/* GET users listing. */
router.post('/create', function(req, res, next) {
    users.create(req.body, function(err, result) {
        if (err) {
            console.log("err", err)
            res.send(err);
        }
        res.send(result)
    })

});

module.exports = router;
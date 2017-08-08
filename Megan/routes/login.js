var express = require('express');
var router = express.Router();
var request = require('request');

/* GET user login. */
router.post('/', function(req, res, next) {
    var login =
        request({
            uri : 'https://swapi.co/api/people',
            qs : {
                search : req.query.username
            }
        }).pipe(res);
});

module.exports = router;

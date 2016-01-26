var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('userinfo', req.body);
});

router.get('/:index', function(req, res, next) {
  fs.readFile("contacts.json", function(err, data) {
    var users = JSON.parse(data);
    var index = req.params.index;
    var user = users[index];
    res.render('userinfo', {user:user});
  });
});

module.exports = router;

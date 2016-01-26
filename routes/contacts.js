var express = require('express');
var router = express.Router();
var path = require("path");
var fs = require("fs")

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile(path.join(__dirname, "../contacts.json"), (err, data) => {
    res.send(data);
  })
});

module.exports = router;

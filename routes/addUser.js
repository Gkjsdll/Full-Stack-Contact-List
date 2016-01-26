var express = require('express');
var router = express.Router();
var path = require("path");
var fs = require("fs");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('addUser', {title: "Add Contact - Jade Contact List"});
});

router.post("/", function(req, res, next){
  fs.readFile(path.join(__dirname, "../contacts.json"), (err, data) => {
    if(err) return res.status(400).send(err);
    var storedData = JSON.parse(data);
    storedData.push(req.body);
    fs.writeFile(path.join(__dirname, "../contacts.json"), JSON.stringify(storedData), (err) => {
      res.send(err || req.body);
    });
  })
})

module.exports = router;

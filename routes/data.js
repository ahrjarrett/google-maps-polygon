var express = require('express');
var router = express.Router();
var data = require('../db/data.json')

router.get('/', function(req, res, next) {
  //console.log(data)
  res.json(data);
});

module.exports = router;

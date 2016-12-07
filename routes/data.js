var express = require('express');
var router = express.Router();
var data = require('../public/javascripts/data.json')

router.get('/', function(req, res, next) {
  res.json(data);
});

module.exports = router;

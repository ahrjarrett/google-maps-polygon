var express = require('express');
var router = express.Router();
var Home = require('../models/home')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Google Maps Polygon' });
});

module.exports = router;

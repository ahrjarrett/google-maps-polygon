var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose')

var Home = require('../models/home')
var secret = require('../db/secret')

//mongoose.connect('secret.database')
//mongoose.model('homes', { id: Number })

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Google Maps Polygon' });
});

//router.get('/id/:id', function(req, res, next){
//  Home.findOne({ '_id.$oid' : req.params.id }, 'formatted_address', function(err, home){
//    if (err) console.log(err)
//    console.log(home)
//  })
//})

//router.get('/home/:id', function(req, res, next){
//  mongoose.model('homes').find(function(err, homes){
//    if(err) { console.log(err); next(); }
//    res.send(homes)
//    //res.send('id: ' + req.params.id)
//  })
//})

module.exports = router;

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var homeSchema = new Schema({
  id: Number
})

module.exports = mongoose.model('home', homeSchema)

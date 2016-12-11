var mongoose = require('mongoose')
var Schema = mongoose.Schema

var HomeSchema = new Schema({
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: Number
  },
  location: {
    lat: Number,
    lng: Number
  },
  price: Number
})

module.exports = mongoose.model('Home', HomeSchema)

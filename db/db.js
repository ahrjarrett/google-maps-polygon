var mongoose = require('mongoose')
var secret = ('./secret')

mongoose.connect(secret.database, function(err){
  if (err) { console.log(err) }
  else { console.log('Connected to the database') }
})


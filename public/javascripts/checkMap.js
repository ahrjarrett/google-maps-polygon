var R = require('ramda')
var homes = require('./data.json')

module.exports = function(poly, el){
  var polygon = poly

  var checkAgainstMapBtn = document.getElementById(el)
  checkAgainstMapBtn.addEventListener('click', function(e){

    e.preventDefault()
    var results = []
    var parentNode = document.getElementById('check-map-log')
    var minPrice = document.getElementById('min-price').value
    var maxPrice = document.getElementById('max-price').value

    R.map(function(home){
      var datum = new google.maps.LatLng(home)
      if(home.price >= minPrice && home.price <= maxPrice){
        if(google.maps.geometry.poly.containsLocation(datum, polygon)) {
            results.push(home)
        }
      }
    }, homes)

    //break while loop and forEach into own module
    while (parentNode.firstChild) {
      parentNode.removeChild(parentNode.firstChild);
    }
    results.forEach(function(home, idx){
      var checkMapTemplate = `${home.lat} ${home.lng}`
      var node = document.createElement('LI')
      var textnode = document.createTextNode(checkMapTemplate)
      node.appendChild(textnode)
      parentNode.appendChild(node)
    })

  })
}

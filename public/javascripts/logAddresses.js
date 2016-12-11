var R = require('ramda')
var homes = require('../../db/data.json')

module.exports = function(map, poly, el){
  var polygon = poly
  var markers = []
  var results = []
  var minPrice = document.getElementById('min-price').value
  var maxPrice = document.getElementById('max-price').value

  var setMapOnAll = function(mapToSet){
    for(var i = 0; i < markers.length; i++){
      markers[i].setMap(mapToSet)
    }
  }
  var clearMarkers = function(){
    setMapOnAll(null)
  }
  var deleteMarkers = function(){
    clearMarkers()
    markers = []
  }
  var addMarker = function(location){
    var marker = new google.maps.Marker({
      position: location,
      map: map
    })
  }

  var getHomes = R.map(function(home){
    var datum = new google.maps.LatLng(home.geometry.location)
    if(home.geometry.price >= minPrice && home.geometry.price <= maxPrice){
      if(google.maps.geometry.poly.containsLocation(datum, polygon)) {
        results.push(home)
      }
    }
  })

  var logAddresses = document.getElementById(el)
  logAddresses.addEventListener('click', function(e){
    e.preventDefault()
    deleteMarkers()
    getHomes(homes)

    var parentNode = document.getElementById('addresses-log')
    var removeElements = (elms) => Array.from(elms).forEach((el) => el.remove())

    removeElements(document.querySelectorAll('.li-address'))

    results.forEach(function(home, idx){
      var checkMapTemplate = `${home.formatted_address}`
      var node = document.createElement('LI')
      node.className += 'li-address'
      var textnode = document.createTextNode(checkMapTemplate)
      node.appendChild(textnode)
      parentNode.appendChild(node)
      markers.push(new google.maps.Marker({ position: home.geometry.location }))
    })

  })
}

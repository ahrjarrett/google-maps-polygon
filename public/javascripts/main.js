(function(){

  var map
  var R = require('ramda')
  var homes = require('./data.json')

  var markers = []

  function initMap() {
    var opts = require('./opts')
    var undoPin = require('./undoPin')
    var logPath = require('./logPath')
    var logHomes = require('./logHomes')

    var mapDiv = 'map-canvas'
    var mapOpts = opts.mapOpts

    map = new google.maps.Map(document.getElementById(mapDiv), mapOpts)

    var polyOpts = opts.polyOpts
    var polygon = new google.maps.Polygon(polyOpts)
    polygon.setMap(map)

    var currentPath = polygon.getPath()
    google.maps.event.addListener(map, 'click', function(e) {
      if(currentPath.length < 6) currentPath.push(e.latLng)
    })

    var testDiv = document.getElementById('test-div')
    var results = []
    testDiv.addEventListener('click', function(e){

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
        var datum = new google.maps.LatLng(home)
        if(home.price >= minPrice && home.price <= maxPrice){
          if(google.maps.geometry.poly.containsLocation(datum, polygon)) {
              results.push(home)
              markers.push(new google.maps.Marker({ position: home }))
          }
        }
      })
      deleteMarkers()
      getHomes(homes)

      setMapOnAll(map)

    })


    undoPin('undo-point')
    logPath(currentPath, 'log-path')
    logHomes(map, polygon, 'log-homes')


  }

  window.onload = initMap

}())

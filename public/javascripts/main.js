(function(){

var map

function initMap() {
  var opts = require('./opts')
  var undoPin = require('./undoPin')
  var logPath = require('./logPath')

  var mapDiv = 'map-canvas'
  var mapOpts = opts.mapOpts

  map = new google.maps.Map(document.getElementById(mapDiv), mapOpts)

  var points = new google.maps.MVCArray()
  var polyOpts = opts.polyOpts
  var polygon = new google.maps.Polygon(polyOpts)
  polygon.setMap(map)

  var currentPath = polygon.getPath()
  google.maps.event.addListener(map, 'click', function(e) {
    if(currentPath.length < 6) currentPath.push(e.latLng)
  })

  undoPin()
  logPath(currentPath)

}

window.onload = initMap

}())

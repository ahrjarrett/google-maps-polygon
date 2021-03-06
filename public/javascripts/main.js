(function(){

  var R = require('ramda')
  var homes = require('../../db/data.json')

  var map
  var markers = []
  var results = []

  function initMap() {
    var opts = require('./opts')
    var undoPin = require('./undoPin')
    var logPath = require('./logPath')
    var logAddresses = require('./logAddresses')
    var logLatLng = require('./logLatLng')
    var showHomes = require('./showHomes')

    var mapDiv = 'map-canvas'
    var mapOpts = opts.mapOpts

    map = new google.maps.Map(document.getElementById(mapDiv), mapOpts)

    var newPolyBtn = document.getElementById('new-poly')
    var polyOpts = opts.polyOpts
    var polygon = new google.maps.Polygon(polyOpts)
    polygon.setMap(map)

    var currentPath = polygon.getPath()
    google.maps.event.addListener(map, 'click', function(e) {
      if(currentPath.length < 6) currentPath.push(e.latLng)
    })

    undoPin('undo-point')
    logPath(currentPath, 'log-path')
    logAddresses(map, polygon, 'log-addresses')
    logLatLng(map, polygon, 'log-lat-lng')
    showHomes(map, polygon, markers, results, 'show-homes')

  }

  window.onload = initMap

}())

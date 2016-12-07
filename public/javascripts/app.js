(function(){

var map

function initMap() {
  var mapDiv = 'map-canvas'
  var mapOpts = {
    center: { lat: 39.7392, lng: -104.9903 },
    zoom: 10
  }
  map = new google.maps.Map(document.getElementById(mapDiv), mapOpts)

  var points = new google.maps.MVCArray()

  var polygonOpts = { path: points, strokeColor: '#1cb841', fillColor: '#1cb841', opacity: .25 }
  var polygon = new google.maps.Polygon(polygonOpts)
  polygon.setMap(map)

  var currentPath = polygon.getPath()
  google.maps.event.addListener(map, 'click', function(e) {
    if(currentPath.length < 6) currentPath.push(e.latLng)
  })

  var undoPin = document.getElementById('undo-point')
  undoPin.addEventListener('click', function(e){
    e.preventDefault()
    currentPath.pop()
  })

}

window.onload = initMap

}())

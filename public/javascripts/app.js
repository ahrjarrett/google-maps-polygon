(function(){

var map
var mapDiv = 'map-canvas'
var mapOpts = {
  center: { lat: 39.7392, lng: -104.9903 },
  zoom: 10
}


function initMap() {
  map = new google.maps.Map(document.getElementById(mapDiv), mapOpts)
  var points = new google.maps.MVCArray()

  //points.push(new google.maps.LatLng(39.7047, -105.0814))
  //points.push(new google.maps.LatLng(39.7555, -105.2211))
  //points.push(new google.maps.LatLng(39.8028, -105.0875))
  //points.push(new google.maps.LatLng(39.7392, -104.9903))
  //points.push(new google.maps.LatLng(39.7047, -105.0814))

  var polylineOpts = { path: points, strokeColor: '#ff0000', strokeWeight:3 }
  var polyline = new google.maps.Polyline(polylineOpts)
  polyline.setMap(map)

  google.maps.event.addListener(map, 'click', function(e) {
    var currentPath = polyline.getPath()
    currentPath.push(e.latLng)
  })
}

window.onload = initMap

}())

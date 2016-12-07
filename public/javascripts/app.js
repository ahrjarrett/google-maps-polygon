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

  var polygonOpts = { path: points, strokeColor: '#ff0000', fillColor: '#ff0000', opacity: .3 }
  var polygon = new google.maps.Polygon(polygonOpts)

  polygon.setMap(map)

  var currentPath = polygon.getPath()
  google.maps.event.addListener(map, 'click', function(e) {
    if(currentPath.length < 6) currentPath.push(e.latLng)
    console.log(currentPath)
  })

  var undoPin = document.getElementById('undo-point')
  undoPin.addEventListener('click', function(e){
    e.preventDefault()
    currentPath.pop()
  })

  //points.push(new google.maps.LatLng(39.7047, -105.0814))
  //points.push(new google.maps.LatLng(39.7555, -105.2211))
  //points.push(new google.maps.LatLng(39.8028, -105.0875))
  //points.push(new google.maps.LatLng(39.7392, -104.9903))

  //var polylineOpts = { path: points, strokeColor: '#ff0000', strokeWeight:3 }
  //var polyline = new google.maps.Polyline(polylineOpts)
  //polyline.setMap(map)


}

window.onload = initMap

}())

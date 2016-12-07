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

  // polygonOpts :: String, Bool -> Obj
  var polygonOpts = function(color, draggable){
    this.path = points
    this.strokeColor = color
    this.fillColor = color
    this.draggable = draggable
    this.opacity = .25
  }

  var polygon = new google.maps.Polygon(new polygonOpts('#1cb841', false))
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

  var enableDrag = document.getElementById('enable-drag')
  var disableDrag = document.getElementById('disable-drag')
  enableDrag.addEventListener('click', function(e) {
    e.preventDefault()
    polygonOpts = new polygonOpts('#1F8DD6', true)
    var polygon = new google.maps.Polygon(polygonOpts)
    polygon.setMap(map)
  })
  disableDrag.addEventListener('click', function(e) {
    e.preventDefault()
    polygonOpts = new polygonOpts('#1cb841', false)
    var polygon = new google.maps.Polygon(polygonOpts)
    polygon.setMap(map)
  })
}

window.onload = initMap

}())

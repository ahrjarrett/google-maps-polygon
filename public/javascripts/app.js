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

  var polygon = new google.maps.Polygon(new polygonOpts('#1cb841', true))
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

  var logPath = document.getElementById('log-path')
  logPath.addEventListener('click', function(e){
    e.preventDefault()
    currentPath.forEach(function(coordinate, idx){
      //console.log(`lat: ${coordinate.lat()} lat: ${coordinate.lng()}`)
    var logTemplate = `${idx + 1}: lat = ${coordinate.lat()} lat = ${coordinate.lng()}`
    var node = document.createElement('LI')
    var textnode = document.createTextNode(logTemplate)
    node.appendChild(textnode)
    document.getElementById('path-log').appendChild(node)
    })
  })

}

window.onload = initMap

}())

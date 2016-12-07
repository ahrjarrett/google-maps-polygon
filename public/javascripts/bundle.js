(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(currentPath){
  this.currentPath = currentPath
  var logPath = document.getElementById('log-path')
  logPath.addEventListener('click', function(e){

    e.preventDefault()
    var parentNode = document.getElementById('path-log')
    while (parentNode.firstChild) {
      parentNode.removeChild(parentNode.firstChild);
    }

    currentPath.forEach(function(coordinate, idx){
      var logTemplate = `${idx + 1}: ${coordinate.lat()} ${coordinate.lng()}`
      var node = document.createElement('LI')
      var textnode = document.createTextNode(logTemplate)
      node.appendChild(textnode)
      parentNode.appendChild(node)
    })
  })
}

},{}],2:[function(require,module,exports){
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

},{"./logPath":1,"./opts":3,"./undoPin":4}],3:[function(require,module,exports){
var opts = {
  mapOpts: {
    center: { lat: 39.7392, lng: -104.9903 },
    zoom: 10
  },
  polyOpts: {
    path: new google.maps.MVCArray(),
    strokeColor: '#1cb841',
    fillColor: '#1cb841',
    draggable: true,
    opacity: .25
  }
  //polygonOpts: function(color, draggable){
//    this.path = points
  //  this.strokeColor = color
  //  this.fillColor = color
  //  this.draggable = draggable
  //  this.opacity = .25
  //}
}

module.exports = opts

},{}],4:[function(require,module,exports){
module.exports = function(){
  var undoPin = document.getElementById('undo-point')
  undoPin.addEventListener('click', function(e){
    e.preventDefault()
    currentPath.pop()
  })
}

},{}]},{},[2]);

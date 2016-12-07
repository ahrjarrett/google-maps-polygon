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

// break while loop and forEach into own module
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

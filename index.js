var _ = require('lodash')

module.exports = {
  toClipsy: function(geojson) {
    var clipsy = []

    if(geojson.geometry.type = 'Polygon'){
      _.each(geojson.geometry.coordinates, function(ring, i){
        // push array for new ring
        clipsy.push([])

        if(i === 0){
          // add outer ring clockwise
          _.each(ring, function(pair){
            clipsy[i].push({X: pair[0], Y: pair[1]})
          })
        }
        else{
          // add pairs counterclockwise
          _.each(ring, function(pair, i){
            
          })
        }
      })
    }

    return clipsy
  },
  toGeojson: function(clipsy) {

  }
}